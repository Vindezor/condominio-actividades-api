const stateWorkController ={};
const {StateWork} = require('../db/sequelize');
const response = require('../utils/global_response');

function findOne(id) {
    return StateWork.findOne({
        where: {
            id
        }
    });
}

stateWorkController.create = (req, res) => {
    if(req.id_type_user >= 3){
        let data = req.body;
        StateWork.create({
            state_work: data.state_work
        }).then((state_work) => {
            res.json(response({
                status: 'SUCCESS',
                data: state_work,
            }));
        }).catch((e) => {
            console.log(e);
            res.json(response({
                status: 'ERROR',
                msg: 'Error al registrar estado de trabajo'
            })); 
        });
    } else {
        res.status(403).send();
    }
}

stateWorkController.findAll = (req, res, next) => {
    StateWork.findAll().then(state_works => {
        res.json(response({
            status: 'SUCCESS',
            data: state_works
        }));
    }).catch((e) => {
        res.json(response({
            status: 'ERROR',
            msg: 'Error al buscar estado de trabajos'
        }));
    });
};

stateWorkController.findById = (req, res, next) => {
    const id = req.params.stateWorkId;
    findOne(id).then(stateWork => {
        if(stateWork){
            res.json(stateWork)
        } else {
            res.status(404).send();
        }
    }).catch(next);
};

module.exports = stateWorkController;