const router = require('express').Router();
const CompanyController = require('../controllers/company_controller');
const validateJWT = require('../middleware/validateJWT');

router.route('/getAllCompany')
    .get(validateJWT, CompanyController.findAll)

router.route('/getCompanyById/:companyId')
    .get(validateJWT, CompanyController.findById)

router.route('/createCompany')
    .post(validateJWT, CompanyController.create)

module.exports = router;