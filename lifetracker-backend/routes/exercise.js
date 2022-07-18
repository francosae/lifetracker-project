const express = require("express")
const Exercise = require("../models/exercise")
const security = require("../middleware/security")
const router = express.Router()
var colors = require('colors')

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const user = res.locals.user
    const userExercise = await Exercise.listExerciseforUser(user)
    console.log(userExercise)
    return res.status(200).json({ userExercise })
  } catch (err) {
    next(err)
  }
})

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const user = res.locals.user
    const createuserExercise = await Exercise.createExercise({ exercise: req.body.exercise, user })
    return res.status(201).json({ createuserExercise })
  } catch (err) {
    next(err)
  }
})

module.exports = router