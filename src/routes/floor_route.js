const router = require('express').Router();
const FloorController = require('../controllers/floor_controller');
const validateJWT = require('../middleware/validateJWT');

router.route('/getAllFloor')
    .get(validateJWT, FloorController.findAll)

router.route('/getFloorById/:floorId')
    .get(validateJWT, FloorController.findById)

router.route('/createFloor')
    .post(validateJWT, FloorController.create)

module.exports = router;