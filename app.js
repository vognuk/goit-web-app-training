const express = require('express');
const exhbs = require('express-handlebars');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine(
    'hbs', 
    exhbs ({
      extname: 'hbs',
    }),
);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(4444, () => {
    console.log(`Application server run on port ${4444}`);
});
