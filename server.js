const express = require('express');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

const exphbs = require('express-handlebars');
const routes = require('./controllers/burger_controller.js');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static(__dirname + '/public'));
// public/assets/css/burger_style.css

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
// =============================================================

app.use(routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));