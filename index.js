const express = require('express');
require("dotenv").config();
const db = require('./db/db');
const router = require("./router")
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(router)

db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));   
