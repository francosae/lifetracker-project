const bcrypt = require('bcrypt');
const { BCRYPT_WORK_FACTOR } = require('../config');
const db = require('../db');
const User = require('../models/user');
const { BadRequestError, UnauthorizedError } = require('../utils/errors');

class Activity {
    static async fetchActivities(email) {
    const user = await User.fetchUserByEmail(email);
    console.log(user.id)
    // console.log(user
        const query = `
        SELECT    avg(calories)
        FROM      nutrition
        WHERE     user_id = $1`;
        const result = await db.query(query, [user.id]);
        const average_cal = result.rows[0]
        return average_cal
      }
    }


module.exports = Activity;