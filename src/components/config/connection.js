const mongoose = require("mongoose")
async function connection () {
   try {
       await mongoose.connect('mongodb+srv://sangamsubedi58:n6cvf6ZQwMpFMFU3@freshmarket.uwuad.mongodb.net/?retryWrites=true&w=majority&appName=FreshMarket')
       console.log('Database is connected Successfully');
   } catch (error) {
       console.log(error)
   }
}
module.exports = connection