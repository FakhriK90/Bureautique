const express = require('express')
const app = express()
// const cors = require('cors');
const port = 8000
const bureautiquedb = require('./Db/bureatiqueDb')

require('dotenv').config()
bureautiquedb()

app.use(express.json())
// app.use(cors())
app.use('/user', require('./Routes/authRoutes'))

app.listen(port, (error) => error ?console.log(error):console.log(`Server listening on port ${port}!`))