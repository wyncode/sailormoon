const express = require('express');
const router = new express.Router();
const Sailor = require('../models/sailor');

// Create a Sailor Scout :) //
router.post('/sailors', async (req, res) => {
  // code your route here
});

// See all of the Sailor Scouts :) //
router.get('/sailors', async (req, res) => {
  //code your route here
});

module.exports = router;
