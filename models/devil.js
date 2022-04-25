const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 devil_name: {
     type:String,
     minLength:1,
     maxLength:30
 },
 version: String, 
 type: {
     type:String,
     minLength:1,
     maxLength:25
 },
}) 
 
module.exports = mongoose.model("devil", 
costumeSchema)