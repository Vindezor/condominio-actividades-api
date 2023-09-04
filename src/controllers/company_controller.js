const companyController ={};
const {Company} = require('../db/sequelize');
const response = require('../utils/global_response');

function findOne(id) {
    return Company.findOne({
        where: {
            id
        }
    });
}

companyController.create = (req, res) => {
    if(req.id_type_user >= 3){
        let data = req.body;
        Company.create({
            company_name: data.company_name,
            contact_phone: data.contact_phone,
        }).then((company) => {
            res.json(response({
                status: 'SUCCESS',
                data: company,
            }));
        }).catch((e) => {
            console.log(e);
            res.json(response({
                status: 'ERROR',
                msg: 'Error al registrar compañia'
            })); 
        });
    } else {
        res.status(403).send();
    }
}

companyController.findAll = (req, res, next) => {
    Company.findAll().then(company => {
        res.json(response({
            status: 'SUCCESS',
            data: company
        }));
    }).catch((e) => {
        res.json(response({
            status: 'ERROR',
            msg: 'Error al buscar compañias'
        }));
    });
};

companyController.findById = (req, res, next) => {
    const id = req.params.companyId;
    findOne(id).then(company => {
        if(company){
            res.json(company)
        } else {
            res.status(404).send();
        }
    }).catch(next);
};

module.exports = companyController;