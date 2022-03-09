const { model, Schema } = require('mongoose')

const Vehiclesmodel = Schema(
  {
    vehiclesnumber: { type: Number, required: true },
    vehicletype: { type: String, required: true },
    arrivingtime: { type: Number, required: true },

    slot: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

module.exports = model('vehicle', Vehiclesmodel)
