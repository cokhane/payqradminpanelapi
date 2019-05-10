const express = require('express')
const bodyParser  = require('body-parser')
const cors = require('cors')
const database = require('./database');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

var response = {
  "status":0,
  "message":null,
  "data":null,
  "error":null
}

require('./routes')(app);

const port = process.env.PORT || 5656;

// routes go here
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
