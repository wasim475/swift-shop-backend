require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors")
const dbConnection = require('./dbConnection/dbConnection')
const Routes = require("./Routes")
 
const port = process.env.PORT || 3000
 
// middleWare
app.use(cors())
app.use(express.json())
app.use(Routes)
// database connector
dbConnection()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})