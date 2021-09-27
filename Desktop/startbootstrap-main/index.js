const express = require ('express')
const app = express()

app.use(express.static('public'))

const path = require ('path')
const ejs = require('ejs')
app.set('view engine','ejs')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

app.get('/',(req,res)=>{
// res.sendFile(path.resolve(__dirname, 'pages/index.html'))
res.render('index');
})

app.get('/about',(req,res)=>{
// res.sendFile(path.resolve(__dirname,'pages/about.html'))
res.render('about');
})

app.get('/contact',(req,res)=>{
// res.sendFile(path.resolve(__dirname,'pages/contact.html'))
res.render('contact');
})

app.get('/post',(req,res)=>{
// res.sendFile(path.resolve(__dirname,'pages/post.html'))
res.render('post');
})

app.listen(4000, ()=>{
console.log('App listening on port 4000')
})

