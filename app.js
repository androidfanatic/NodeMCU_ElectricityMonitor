const express = require('express');

const app = express();

// add routes
app.get('/ping', require('./routes/ping'));
app.get('/data', require('./routes/data'));
app.get('/', require('./routes/home.js'));

// listen
app.listen(process.env.PORT || 8080);
