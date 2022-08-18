const mongoose = require ('mongoose');

const notesSchema = new mongoose.Schema({

    title: {type:String, required:true},
    description: String,
    createdBy:{type:mongoose.Schema.Types.ObjectId , ref:"User" , required:true},


}, {
    timestamps:true
})
const notesModel  = mongoose.model("Note" , notesSchema);
module.exports = notesModel