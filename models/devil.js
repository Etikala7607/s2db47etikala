const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 devil_name: String, 
 version: String, 
 type: String 
}) 
 
module.exports = mongoose.model("devil", 
costumeSchema)