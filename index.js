const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fruits = require('./fruits');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/fruits', fruits);

app.listen(5000, () => console.info(`running on port 5000`));
