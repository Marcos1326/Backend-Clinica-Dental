const express = require('express');
require("dotenv").config();
const db = require('./db/db');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

const cors = require('cors');

let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    // allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions))

const router = require("./router")
app.use(router)

db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));   
