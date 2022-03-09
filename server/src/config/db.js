const mongoose = require('mongoose')
require('dotenv').config()

module.exports = () => {
  return mongoose.connect(
    `mongodb+srv://gaurav:${process.env.PASSWORD}@parkingmanagement.shxwf.mongodb.net/parkingsystem`,
  )
}
