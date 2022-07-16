const { BadRequestError } = require("../utils/errors")
const db = require("../db")
var colors = require('colors');
const User = require('../models/user');
// name: "",
// imageUrl: "",
// calories: 1,
// quantity: 1,
// category: "",
// })
class Nutrition {
  static async listNutritionforUser(user) {
    const userObj = await User.fetchUserByEmail(user.email)
    const result = await db.query(
      ` SELECT * 
        FROM nutrition
        WHERE user_id = $1;
      `, [userObj.id]
    )

    return result.rows
  }
  static async createNutrition(userNutrition) {
    const user = await User.fetchUserByEmail(userNutrition.user.email)
    
    const result = await db.query(
        `
              INSERT INTO nutrition(
                  title,
                  category,
                  quantity,
                  calories,
                  image_url,
                  user_id
              )
              VALUES ($1,$2,$3,$4,$5,$6)
              RETURNING user_id,title,category,quantity,calories;
              `,
        [
          userNutrition.nutrition.name,
          userNutrition.nutrition.category,
          userNutrition.nutrition.quantity,
          userNutrition.nutrition.calories,
          userNutrition.nutrition.imageUrl,
          user.id,
        ]
      );
  
      const res = result.rows[0];
      return res;
  }
}

module.exports = Nutrition