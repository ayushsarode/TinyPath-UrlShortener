const mongoose = require('mongoose')

connectToMongoDB = (url) => {
return mongoose.connect(url)
} 

module.exports = {
connectToMongoDB
}