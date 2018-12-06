const express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000

//static files:
app.use(express.static(path.join(__dirname + '/public')));

//handlebars middleware:
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




app.get('/', (req, res) => {
    res.render('home')
})

app.get('/users/login', (req, res) => {
    res.render('login')
})

app.listen(port, () =>{
    console.log(`server is working on port: ${port}`)
})