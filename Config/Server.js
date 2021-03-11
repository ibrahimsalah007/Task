const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const Database = require('./database');

const KEYS = require('./Keys');
const Keys = require('./Keys');

/**Initialize express app */
const app = express();

//Server configuration
app.set('trust proxy', true); // trust first proxy
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(Keys.PORT, () => console.log('Server Running on Port ' + Keys.PORT));
module.exports = app;
