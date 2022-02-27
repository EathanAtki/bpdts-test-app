require('dotenv').config()

const express = require('express')
const app = express()

const { API_PORT } = process.env
const port = process.env.PORT || API_PORT;

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

// app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app