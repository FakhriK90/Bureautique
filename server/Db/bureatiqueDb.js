const mongoose = require('mongoose')

const bureautiquedb = async()=>{
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to database')
    } catch (error) {
        console.log('Not connected'+error)
    }
}

module.exports = bureautiquedb