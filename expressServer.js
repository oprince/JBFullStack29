const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/index.html", (req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/show", (req,res)=>{
    let name = req.body.name;
    res.send(`${name}`);
})

app.listen(3000);
