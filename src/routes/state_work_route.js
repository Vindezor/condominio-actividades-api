const router = require('express').Router();
const StateWorkController = require('../controllers/state_work_controller');
const validateJWT = require('../middleware/validateJWT');

router.route('/getAllStateWork')
    .get(validateJWT, StateWorkController.findAll)

router.route('/getStateWorkById/:stateWorkId')
    .get(validateJWT, StateWorkController.findById)

router.route('/createStateWork')
    .post(validateJWT, StateWorkController.create)

module.exports = router;