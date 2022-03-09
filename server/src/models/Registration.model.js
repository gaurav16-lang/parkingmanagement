const { model, Schema } = require('mongoose')

const RegistrationSchema = Schema(
  {
    name: { type: String, require: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    Ownername: { type: String, required: true },
    openingtime: { type: Number, required: true },
    clossingtime: { type: Number, required: true },
    availabilityfourvehicles: { type: Number, required: true },
    availabilitytwovehicles: { type: Number, required: true },
    ratetwovehicle: { type: Number, required: true },
    ratefourvehicles: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

const Registartion = model('registration', RegistrationSchema)
module.exports = Registartion
