require('dotenv').config()
const express = require('express')
const app = express()

const cors = require('cors')

app.use(express.json())
app.use(cors())

const coreRoutes = require('./routes/coreRoutes.js')
// ENDPOINTS
app.use('/api', coreRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('server is listening on port ', PORT))