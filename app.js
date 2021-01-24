///include modules and server-related variables
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const generateTrashTalk = require('./generate_phrase');
const port = 3000;

//template engine set up
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//set body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//set route
app.get('/', (req, res) => {
    res.render('index');
})

app.post('/', (req, res) => {
    const trashTalk = generateTrashTalk(req.body);
    //create variable to keep user data after submission
    const selected = { [req.body.job]: 'on' }
    res.render('index', { trashTalk, selected });
})

//start server and listen to connections
app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`);
})



