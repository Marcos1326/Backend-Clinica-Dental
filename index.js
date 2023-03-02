const express = require('express');
const app = express();
app.use(express.json());

const db = require('./db.js');


const PORT = process.env.PORT || 4000;
