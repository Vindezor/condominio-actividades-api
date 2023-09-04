const responsibleController ={};
const {Responsible} = require('../db/sequelize');
const response = require('../utils/global_response');

function findOne(id) {
    return Responsible.findOne({
        where: {
            id
        }
    });
}

responsibleController.create = (req, res) => {
    if(req.id_type_user >= 3){
        let data = req.body;
        Responsible.create({
            name: data.name,
            document_id: data.document_id,
            id_company: data.id_company,
        }).then((responsible) => {
            res.json(response({
                status: 'SUCCESS',
                data: responsible,
            }));
        }).catch((e) => {
            console.log(e);
            res.json(response({
                status: 'ERROR',
                msg: 'Error al registrar responsable'
            })); 
        });
    } else {
        res.status(403).send();
    }
}

responsibleController.findAll = (req, res, next) => {
    Responsible.findAll().then(responsibles => {
        res.json(response({
            status: 'SUCCESS',
            data: responsibles
        }));
    }).catch((e) => {
        res.json(response({
            status: 'ERROR',
            msg: 'Error al buscar responsables'
        }));
    });
};

responsibleController.findPending = (req, res, next) => {
    Responsible.findAll({
        // where: {
        //     end_date
        // }
    }).then(responsibles => {
        res.json(response({
            status: 'SUCCESS',
            data: responsibles
        }));
    }).catch((e) => {
        res.json(response({
            status: 'ERROR',
            msg: 'Error al buscar responsables'
        }));
    });
};

responsibleController.findById = (req, res, next) => {
    const id = req.params.responsibleId;
    findOne(id).then(responsible => {
        if(responsible){
            res.json(responsible)
        } else {
            res.status(404).send();
        }
    }).catch(next);
};

module.exports = responsibleController;