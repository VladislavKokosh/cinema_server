const mongoose = require('mongoose')
const express = require('express')
const app = express()
const server = require('http').createServer(app);
const port = require('./config/server').port;
const cors = require('cors');
const toJson = require('@meanie/mongoose-to-json');
const bodyParser = require('body-parser');
const jsonParser = express.json();


mongoose.plugin(toJson);

require('./utils/dataBase').setUpConnection()
require('./models/Films')
require('./models/Halls')
require('./models/Places')
require('./models/Sessions')
require('./models/Users')
require('./models/SelectedPlaces')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(jsonParser);

app.use('/',require('./routes/index'));

server.listen(port);