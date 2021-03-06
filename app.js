const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
app.use(compression({}));

// add routes
app.get('/ping', require('./routes/ping'));
app.get('/data', require('./routes/data'));

app.use('/', express.static(path.resolve(__dirname, 'public')));

// listen
app.listen(process.env.PORT || 8080);
