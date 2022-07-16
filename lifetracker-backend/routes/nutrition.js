// name: "",
// imageUrl: "",
// calories: 1,
// quantity: 1,
// category: "",
// })

const express = require("express")
const Nutrition = require("../models/nutrition")
const security = require("../middleware/security")
const router = express.Router()
var colors = require('colors')

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const user = res.locals.user
    console.log("get")
    const userNutrition = await Nutrition.listNutritionforUser(user)
    
    return res.status(200).json({ userNutrition })
  } catch (err) {
    next(err)
  }
})

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const user = res.locals.user
    const createuserNutrition = await Nutrition.createNutrition({ nutrition: req.body.nutrition, user })
    return res.status(201).json({ createuserNutrition })
  } catch (err) {
    next(err)
  }
})

module.exports = router