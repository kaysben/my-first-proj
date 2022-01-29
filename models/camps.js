const mongoose = require("mongoose");

const CampsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: String,
  userId: { type: mongoose.Schema.Types.ObjectId },
  startDate:{type:Date,required:true},
  endDate:{type:Date,required:true},
  place:{ type: String, required: true },
  
  
  
  
  // jointure entre user et movie
});
module.exports = mongoose.model("Camps", CampsSchema);
