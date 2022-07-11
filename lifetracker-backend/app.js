const express = require('express')
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const port = 3001
var colors = require('colors');
require('dotenv').config();

app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(colors.blue(`Server started on port ${port}`))
})