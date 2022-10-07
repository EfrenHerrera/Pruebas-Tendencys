const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require('./config/db/mongodb');

const app = express();

var corsOptions = { 
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(logger('dev'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/main.routes')(app);

const PORT = process.env.PORT || 8080;
var httpServer = require('http').createServer(app);
httpServer.listen(PORT);

module.exports = app;
