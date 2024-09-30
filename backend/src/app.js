const express = require('express');

const { notFound, errorHandler } = require('./middlewares');

const app = express();

require('dotenv').config();

const places = require('./routes/places');

app.use('/api/places', places);

app.use(notFound);
app.use(errorHandler);

module.exports = app;