const router = require ('express').Router();
const validation = require('../../middleware/validation');
const validators = require('./user.validation');
const control = require ('./controller/registration');


router.post('/signUp', validation(validators.signup), control.signUp )
router.get('/confirmEmail/:token', validation(validators.confirmEmail), control.confirmEmail)
router.post('/signIn', validation(validators.login), control.signIn)






module.exports = router