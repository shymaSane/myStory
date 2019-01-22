const express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path');


//launch express
const app = express();
const port = 3000


//static files:
app.use(express.static(path.join(__dirname + '/public')));

//bring routers:
const users = require('./routes/users')
const stories = require('./routes/stories')



//handlebars middleware:

const hbs = exphbs.create({
    helpers:{
        sub_text: (story_text) => {
            const sub = story_text.substr(0, 100)
            console.log(sub)
            return sub
        }
    }
})
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home')
})

//using routes
app.use('/users', users)
app.use('/', stories)

app.listen(port, () =>{
    console.log(`server is working on port: ${port}`)
})