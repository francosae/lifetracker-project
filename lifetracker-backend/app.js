const express = require('express')
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const { PORT } = require('./config')
var colors = require('colors');
require('dotenv').config();

app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(colors.blue(`Server started on port ${PORT}`))
})