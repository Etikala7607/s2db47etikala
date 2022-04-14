const mongoose = require("mongoose") 
const devilSchema = mongoose.Schema({ 
 name: String, 
 version: String, 
 type: String 
}) 
 
module.exports = mongoose.model("Devil", 
devilSchema);