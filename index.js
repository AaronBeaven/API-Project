const express = require('express'); //npm i express
// this is making it so we are able to use express after installing it in my project
const request = require('request'); // this will be replaced with fetch later on

const path = require('path');

const hbs = require('express-handlebars');

const getAPI = require('./lib/getAPI')
require('dotenv').config()

// Function inits 
const app = express() // initialized express to use its features
// const getWeather = require('./lib/getWeather')

//path is about to be set up
app.use(express.static(path.join(__dirname, 'public')));
//this is setting the path which it will be taking to public

app.engine('.hbs', hbs({ // this is setting the engine 
    defaultLayout:'layout',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

// getWeather()

//four http methods : GET, POST, PUT & DELETE - you may see CRUD for some other stacks, which stands for cxreate, read, update and delete

// get is a function inside of  express - for more info look at express module on NPMJS
app.get('/', async (req, res) =>{ //each get method should have a req & res -- Req = request. Res = response - standard naming convention
    let data = await getAPI.getWeather()
    console.log(data);
    
    res.render('index', {
        data,
        title: `the weather`
    })

})

app.get('/harrypotter', async (req, res) =>{
    let data = await getAPI.getHarryPotter()
    console.log(data);
    
    res.render('harrypotter', {
        data, 
        title: `you have randomly sorted into: ${data}`
    })
})
app.get('/jokes', async (req, res) =>{
    let data = await getAPI.getJokes()
    console.log(data);
    
    res.render('jokes', {
        data, 
        title: `you have randomly sorted into: ${data}`
    })
})
app.get('/bored', async (req, res) =>{
    let data = await getAPI.getBored()
    data = data.activity
    console.log(data);
    
    res.render('bored', {
        data, 
        title: `you have randomly selected: ${data}`
    })
})
app.get('/quotes', async (req, res) =>{
    let data = await getAPI.quotes()

    console.log(data);
    
    res.render('quotes', {
        data, 
        title: `you have randomly selected: ${data}`
    })
})


app.listen(3000, ()=>{ //creates a connection on a specified port in this case local host 3000 - the response i get is 'cannot get /"
    console.log('i am listening on port 3000');
    
})