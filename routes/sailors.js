const express = require('express');
const router = new express.Router();
const Sailor = require('../models/sailor');

// Create a Sailor Scout :) //

router.post('/sailors', async (req, res) => {
  const sailor = new Sailor(req.body);
  try {
    await sailor.save();
    res.status(201).send({ sailor });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/sailors', async (req, res) => {
  Sailor.find({})
    .then((sailors) => {
      res.send(sailors);
    })
    .catch((e) => {
      res.send(e);
    });
});

module.exports = router;
