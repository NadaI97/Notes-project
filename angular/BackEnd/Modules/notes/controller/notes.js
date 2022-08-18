const notesModel = require("../../../DB/Model/notes");
const userModel = require("../../../DB/Model/user");



const createNote = async(req,res)=>{

   // try {

    const {title , description} =req.body;
    const createdBy = req.user._id

    const newNote = new notesModel({title, description , createdBy});

    const addNote = await newNote.save();
        

    await userModel.findByIdAndUpdate(req.user._id, {$push:{notes: addNote._id}});

    

    res.status(201).json({message: "Done", addNote})

   // } catch (error) {
    
   //  res.status(500).json ({message: "Internal server error", error})

   // }


}








module.exports={

createNote
}