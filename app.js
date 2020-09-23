const mongoose = require('mongoose')
const express = require('express')
const app = express()
const config = require('config')
const server = require('http').createServer(app);
const port = require('./config/server').port;



require('./utils/dataBase')
require('./models/Films')
require('./models/Halls')
require('./models/Places')
require('./models/Sessions')
require('./models/Users')

app.use('/',require('./routes/index'));

server.listen(port);