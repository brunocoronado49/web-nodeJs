const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

/// SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); // Cargando el motor de plantillas

// MIDDLEWARES
app.use(morgan('dev'));

//ROUTES
app.use(require('./routes/'));

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// LISTENING THE PORT
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});

