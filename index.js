const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cron = require('node-cron');
const port = 4000;
const app = express();


require('../Challenge6/database/connect')
require('../Challenge6/crons/first-cron')
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, () => {
    console.log('App is running on port 4000')
})
