const router = require('express').Router();
const TypeWorkController = require('../controllers/type_work_controller');
const validateJWT = require('../middleware/validateJWT');

router.route('/getAllTypeWork')
    .get(validateJWT, TypeWorkController.findAll)

router.route('/getTypeWorkById/:typeWorkId')
    .get(validateJWT, TypeWorkController.findById)

router.route('/createTypeWork')
    .post(validateJWT, TypeWorkController.create)

module.exports = router;