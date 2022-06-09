const mongoose = require('mongoose')
const mongoPath = 'YOUR_MONGODB_URL'



module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    return mongoose
}