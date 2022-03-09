const express = require('express')
const router = express.Router()
const Vehicle = require('../models/vehicles.model')

router.post('/', async (req, res) => {
  try {
    const data = await Vehicle.create(req.body)
    return res.status(201).send(data)
  } catch (e) {
    return res.status(500).json({ e: e.message, status: 'Failure' })
  }
})
router.post('/exit', async (req, res) => {
  try {
    const data = await Vehicle.findOneAndUpdate({
      vehiclesnumber: req.body.vehiclesnumber,
    })
    return res.status(201).send(data)
  } catch (e) {
    return res.status(500).json({ e: e.message, status: 'Failure' })
  }
})

module.exports = router
