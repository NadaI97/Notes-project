

const Joi = require('joi');


const signup = {
    body: Joi.object().required().keys({
        firstName:Joi.string().required().pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/)).messages({
            'any.required':"please send your name"
        }),
        lastName:Joi.string().required().pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/)).messages({
            'any.required':"please send your name"
        }),
        email:Joi.string().email().required(),
        password:Joi.string().required().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)),
        cPassword:Joi.string().valid(Joi.ref('password')).required()
    })
}


const confirmEmail = {
    params: Joi.object().required().keys({
        token:Joi.string().required(),
    })
}




const login = {
    body: Joi.object().required().keys({
        email:Joi.string().email().required(),
        password:Joi.string().required().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)),
       
    })
}



module.exports =  {
    signup,
    confirmEmail,
    login
 

}