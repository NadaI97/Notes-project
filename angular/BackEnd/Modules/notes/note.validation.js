
const Joi = require('joi');

const createNote = {
    body: Joi.object().required().keys({
        title:Joi.string().required(),
        descrption: Joi.string()
        
    }),
    
}


const updateNote = {
    body: Joi.object().required().keys({
        title:Joi.string().required(),
        descrption: Joi.string()
        
    })
}


const deleteNote = {

    params: Joi.object().required().keys({

        id: Joi.string().min(24).max(24)

    })

}


module.exports = {

    createNote,
    updateNote,
    deleteNote

}