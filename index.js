const express = require('express')
const app = express()
const cors= require('cors')
const port =process.env.PORT || 5000;

const recipe= require('./fakeData/recipeDetails.json');
console.log(recipe);
const category = require('./fakeData/category.json')
app.use(cors())
app.get('/',(req,res) =>{
    res.send('    Cooking in running')
})
app.get('/recipe',(req,res) =>{
    res.send(recipe);
})
app.get('/category',(req, res)=>{
    res.send(category)
})
app.get('/recipe/:id',(req, res) =>{
    const id = parseInt(req.params.id);
    console.log(id)
    const selectedChef = recipe.filter(n => parseInt(n.category__id) === id)
    res.send(selectedChef)
})

app.listen(port , () =>{
    console.log(`Cookking is continue at port: ${port}`)
})