//constants

const hbs = require('hbs');
const express = require('express');
const port = process.env.PORT || 8080;
const bodyparser = require('body-parser');

//static content

var app = express();
var urlencodedParser = bodyparser.urlencoded({extended: false});

app.use(express.static(__dirname + '/views'));
app.set('views', './views');
app.set('view engine', 'hbs');

//main page

app.get('/', (request, response) => {
  response.redirect('/login');
});

app.get('/main', (request, response) => {
  response.render('mainapp.hbs');
});

app.get('/login', (request, response) => {
  response.render('login.hbs');
});

app.post('/verifylogin', urlencodedParser, (request, response) => {
  console.log(request.body.user, request.body.pass)
  response.redirect('/main')
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
