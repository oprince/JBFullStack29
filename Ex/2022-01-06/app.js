const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//setting middleware
let staticFolder = path.join(__dirname, "public");
app.use(express.static(staticFolder)); //Serves resources from public folder
app.use(bodyParser()); //parses the body of the request

//setting root API
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/student", (req, res) => {
  const { data } = req.body;
  console.log(data);
  res.send("Student Added");
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port} serving static content from folder ${staticFolder}`
  );
});
