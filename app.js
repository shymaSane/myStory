const express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:3000/my_story_users"

//launch express
const app = express();
const port = 3000

//connect mongodb:
// MongoClient.connect(url,  { useNewUrlParser: true })


//static files:
app.use(express.static(path.join(__dirname + '/public')));

//bring routers:
const users = require('./routes/users')

//handlebars middleware:
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('home')
})

//using routes
app.use('/users', users)

app.listen(port, () =>{
    console.log(`server is working on port: ${port}`)
})