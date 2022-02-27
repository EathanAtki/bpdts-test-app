require('dotenv').config()
const express = require('express')
const router = express.Router()
const userController = require('../controllers/user');

// Get
router.get("/", userController.getUsers);

module.exports = router