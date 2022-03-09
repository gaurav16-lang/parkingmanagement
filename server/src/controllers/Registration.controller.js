const express = require('express')
const router = express.Router()
const Registration = require('../models/Registration.model')

router.post('/', async (req, res) => {
  try {
    const data = await Registration.create(req.body)
    return res.status(201).send(data)
  } catch (e) {
    return res.status(500).json({ e: e.message, status: 'Failure' })
  }
})
router.post('/login', async (req, res) => {
  try {
    const data = await Registration.findOne({
      email: req.body.email,
      password: req.body.password,
    })

    return res.status(200).send(data)
  } catch (e) {
    return res.status(500).json({ e: e.message, status: 'Failure' })
  }
})
module.exports = router
