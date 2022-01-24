const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
const port = 3000;

//setting middleware
let staticFolder = path.join(__dirname, "public");
app.use(express.static(staticFolder)); //Serves resources from public folder

//setting root API
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port} serving static content from folder ${staticFolder}`
  );
});
