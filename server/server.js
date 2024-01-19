const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());


/*
app.get("/", (req, res) => {
    res.send({"id":1, "url":"/ !"});
});
*/

app.get("/users", (req, res) => {
    res.send({"id":2, "url":"/users !!"});
});


app.listen(PORT, () => {
    console.log(`Server up on ${PORT}!!`);
});



