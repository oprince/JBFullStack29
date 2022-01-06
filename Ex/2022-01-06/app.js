const express = require('express');
const path = require('path');
const app = express()
const port = 3000

//setting middleware
let staticFolder = path.join(__dirname, 'public');
app.use(express.static(staticFolder)); //Serves resources from public folder

//setting root API
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//POST student API
app.post('/student', (req, res) => {
    console.log("student was posted");
    res.send('student was posted')
  })
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} serving static content from folder ${staticFolder}`)
});
