const express = require('express');
const app = express();
app.use(express.json());

const db = require('./db/db')


const PORT = process.env.PORT || 4000;

db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));   
