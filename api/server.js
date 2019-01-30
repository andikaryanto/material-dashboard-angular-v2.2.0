const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

const m_groupuserRoute = require('./routes/m_groupuser.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/m_groupuser', m_groupuserRoute);
const port = process.env.PORT || 4100;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});