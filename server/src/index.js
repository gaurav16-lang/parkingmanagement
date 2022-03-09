const express = require('express')
const cors = require('cors')
const app = express()

const Registercontroller = require('./controllers/Registration.controller')
const VehicleController = require('./controllers/Vehiclecontroller')
app.use(express.json())
app.use(cors())

app.use('/register', Registercontroller)
app.use('/vehicle', VehicleController)
module.exports = app
