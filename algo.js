const mongoose = require('mongoose')
const User = mongoose.model('User')

const personalityAlgorithm = async (displayName) => {
  const user = await User.findOne({ displayName })

  console.log(user)
}

module.exports = personalityAlgorithm
