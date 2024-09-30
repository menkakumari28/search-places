const express = require('express');
const cors = require('cors')
const { notFound, errorHandler } = require('./middlewares');

const app = express();

app.use(cors())

require('dotenv').config();

const places = require('./routes/places');

app.use('/api/places', places);

app.use(notFound);
app.use(errorHandler);

module.exports = app;