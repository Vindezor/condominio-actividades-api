const floorController ={};
const {Floor} = require('../db/sequelize');
const response = require('../utils/global_response');

function findOne(id) {
    return Floor.findOne({
        where: {
            id
        }
    });
}

floorController.create = (req, res) => {
    if(req.id_type_user >= 3){
        let data = req.body;
        Floor.create({
            floor: data.floor
        }).then((floor) => {
            res.json(response({
                status: 'SUCCESS',
                data: floor,
            }));
        }).catch((e) => {
            console.log(e);
            res.json(response({
                status: 'ERROR',
                msg: 'Error al registrar piso'
            })); 
        });
    } else {
        res.status(403).send();
    }
}

floorController.findAll = (req, res, next) => {
    Floor.findAll().then(floors => {
        res.json(response({
            status: 'SUCCESS',
            data: floors
        }));
    }).catch((e) => {
        res.json(response({
            status: 'ERROR',
            msg: 'Error al buscar pisos'
        }));
    });
};

floorController.findById = (req, res, next) => {
    const id = req.params.floorId;
    findOne(id).then(floor => {
        if(floor){
            res.json(floor)
        } else {
            res.status(404).send();
        }
    }).catch(next);
};

module.exports = floorController;