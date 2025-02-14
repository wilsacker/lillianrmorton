const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars with `main.hbs` as the default layout
app.engine('hbs', exphbs.engine({ 
    extname: 'hbs', 
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', 'hbs');

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Load JSON data
const services = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/services.json'), 'utf8'));

// Routes
app.get('/', (req, res) => {
    res.render('pages/home', { title: 'Home' , services});
});

app.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About' });
});

app.get('/consultations', (req, res) => {
    res.render('pages/consultations', { title: 'Consultations' , services });
});

app.get('/evals', (req, res) => {
    res.render('pages/evals', { title: 'Psychoeducational Evaluations' , services});
});

app.get('/counseling', (req, res) => {
    res.render('pages/counseling', { title: 'Counseling' , services});
});

app.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact' });
});

app.use((req, res) => {
    res.status(404).render('pages/404', { title: 'Page Not Found' });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));