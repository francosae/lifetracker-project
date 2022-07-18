const express = require('express')
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const { PORT } = require('./config')
const { NotFoundError } = require('./utils/errors');
const authRoutes = require("./routes/auth")
const activityRoutes = require("./routes/activity")
const exerciseRoutes = require("./routes/exercise")
const security = require("./middleware/security")

const nutritionRoutes = require("./routes/nutrition")
var colors = require('colors');
require('dotenv').config();

app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())
app.use(security.extractUserFromJwt)
app.use("/auth", authRoutes)
app.use("/nutrition", nutritionRoutes)
app.use("/exercise", exerciseRoutes)
app.use("/activity", activityRoutes)

app.get("/", function (req, res) {
  return res.status(200).json({
    ping: "pong",
  })
})
app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(PORT, () => {
  console.log(colors.blue(`🚀Server🚀started🚀on🚀port🚀${PORT}🚀`))
})