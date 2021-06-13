require('./models/User')
require('./models/Match')
require('./models/Relationship')

const mongoose = require('mongoose')
const personalityAlgorithm = require('./algo')

const mongoUri = 'mongodb+srv://josephtey:joe123@cluster0-8gz6y.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on('connected', async () => {
  console.log("Connected to Mongo instance! ")

  personalityAlgorithm("Joseph Tey")
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to mongo', err)
})