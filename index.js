const express = require('express');
const morgan = require('morgan');
const app = express();

const topMovies = [
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        year: 2004
    },
    {
        title: 'Pride and Prejudice',
        year: 2005
    },
    {
        title: 'Titanic',
        year: 1997
    },
    {
        title: 'The Little Mermaid',
        year: 1989
    }, 
    {
        title: 'Cinderella',
        year: 1950
    },
    {
        title: 'Thor: Ragnarok',
        year: 2017
    },
    {
        title: 'The Holiday',
        year: 2006
    },
    {
        title: 'White Chicks',
        year: 2004
    },
    {
        title: 'The Shawshank Redemption',
        year: 1994
    },
    {
        title: 'Shutter Island',
        year: 2010
    },
]

app.use(morgan('common'));

app.get('/', (req, res) => {
    res.send('Welcome to Movies API!');
});

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', {root: __dirname});
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});
  
