const { Schema, model } = require('mongoose')

const Parkinglot = Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

module.exports = model('parkinglot', Parkinglot)
