const { response } = require('express')
const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/parciales');

//express HBS engine
app.set('view engine', 'hbs');

app.get('/', (request, response) => {
    response.render('home', {
        nombre: 'neftali'
    });
});

app.get('/about', (request, response) => {
    response.render('about', {
        nombre: 'neftali'
    });
});

app.listen(3000, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})