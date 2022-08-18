const router = require ('express').Router();
const validation = require('../../middleware/validation');
const validators = require ('./note.validation')
const { auth, Roles } = require('../../middleware/auth');
const control = require ('./controller/notes');
const updatesAndDeletes = require('./controller/updateAndDelete')

router.post ('/newNote',validation(validators.createNote),auth(Roles.user), control.createNote);

router.patch ('/updateNote/:id', validation(validators.updateNote), auth(Roles.user),updatesAndDeletes.updateNote )

router.delete ('/delete/:id', validation(validators.deleteNote), auth(Roles.user), updatesAndDeletes.deleteNote)


module.exports = router
