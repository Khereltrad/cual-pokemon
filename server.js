const express = require("express");
const app = express();
const axios = require("axios");
const port = 8000;


app.get("/",(req,res) =>    {res.json({message: "Hola ^^"});    });

app.use(express.static(__dirname+"/public"));
app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.get("/cual-pokemon", (req, res) => {
    res.render("index");
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );