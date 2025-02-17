const mongoose = require('mongoose')
const {USER_NAME, PASSWORD, DATABASE}= process.env
const dbConnection = ()=>{
    mongoose.connect(`mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.olj4i.mongodb.net/${DATABASE}?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('Database Connected!'));
}

module.exports = dbConnection