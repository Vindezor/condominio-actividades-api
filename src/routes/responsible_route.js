const router = require('express').Router();
const ResponsibleController = require('../controllers/responsible_controller');
const validateJWT = require('../middleware/validateJWT');

router.route('/getAllResponsible')
    .get(validateJWT, ResponsibleController.findAll)

router.route('/getResponsibleById/:responsibleId')
    .get(validateJWT, ResponsibleController.findById)

router.route('/createResponsible')
    .post(validateJWT, ResponsibleController.create)

module.exports = router;