const { BadRequestError } = require("../utils/errors")
const db = require("../db")
var colors = require('colors');
const User = require('../models/user');

class Exercise {
  static async listExerciseforUser(user) {
    const userObj = await User.fetchUserByEmail(user.email)
    const result = await db.query(
      ` SELECT * 
        FROM exercise
        WHERE user_id = $1;
      `, [userObj.id]
    )
    console.log(result.rows)
    return result.rows
  }
  static async createExercise(userExercise) {
    console.log(userExercise)
    console.log("hit")
    const user = await User.fetchUserByEmail(userExercise.user.email)
    
    const result = await db.query(
        `
              INSERT INTO exercise(
                  name,
                  intensity,
                  duration,
                  category,
                  user_id
              )
              VALUES ($1,$2,$3,$4,$5)
              RETURNING user_id,name,intensity,duration,category;
              `,
        [
          userExercise.exercise.name,
          userExercise.exercise.intensity,
          userExercise.exercise.duration,
          userExercise.exercise.category,
          user.id,
        ]
      );
      
      const res = result.rows[0];
      console.log(res)
      return res;
  }
}
module.exports = Exercise
