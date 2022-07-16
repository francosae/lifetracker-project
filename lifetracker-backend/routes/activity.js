const express = require("express")
const User = require('../models/user');
const security = require("../middleware/security")
const router = express.Router()
const Activity = require("../models/activity")
var colors = require('colors')

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const user = res.locals.user
    const response = await Activity.fetchActivities(user.email)
    console.log(response)
    return res.status(200).json({ response })
  } catch (err) {
    next(err)
  }
})

module.exports = router