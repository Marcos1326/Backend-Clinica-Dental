const express = require('express');
require("dotenv").config();
const db = require('./db/db');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors')
app.use(express.json());

const router = require("./router")
app.use(router)

db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));   
