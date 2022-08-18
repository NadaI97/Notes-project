const notesModel = require("../../../DB/Model/notes");








const deleteNote = async (req,res)=>{

   try {
    const {id}= req.params

    const findNote = await notesModel.findOne({_id: id});

    if (!findNote) {

        res.status(404).json({message: "Note not found"})
        
    } else {
        
        if (findNote.createdBy.toString() == req.user._id.toString()) {

            await NoteModel.findByIdAndDelete(findNote._id);
            res.status(200).json({message: "Note Deleted"})
    
            } else {
    
                res.status(403).json({message:"You are not auth"})
            }
               
            

            }
   } catch (error) {

    res.status(500).json({message: "Error", error})

   }
        

}



const updateNote = async (req, res)=>{

    try {

        const {id} = req.params
    const {title, descrption} = req.body;

    const findNote = await notesModel.findOne({_id: id});

    if (!findNote) {

        res.status(404).json({message: "Note not found"})

    } else {
        
        if (findNote.createdBy.toString() == req.user._id.toString()) {

            await NoteModel.findByIdAndUpdate(findNote._id ,{title, descrption}, {new: true});
            
            res.status(200).json({message: "Note Updated"})
    
            } else {
    
                res.status(403).json({message:"You are not auth"})
            }
            
    
        }
    } catch (error) {
        
                 res.status(500).json({message: "Error", error})

    }
    }


    



module.exports  ={

    deleteNote,
    updateNote
    
}