const equipmentFacilitiesController ={};
const {EquipmentFacilities, Floor} = require('../db/sequelize');
const response = require('../utils/global_response');

function findOne(id) {
    return EquipmentFacilities.findOne({
        where: {
            id
        }
    });
}

equipmentFacilitiesController.create = (req, res) => {
    if(req.id_type_user >= 3){
        let data = req.body;
        EquipmentFacilities.create({
            name: data.name,
            id_floor: data.id_floor,
            description: data.description,
        }).then((equipmentFacilities) => {
            res.json(response({
                status: 'SUCCESS',
                data: equipmentFacilities,
            }));
        }).catch((e) => {
            console.log(e);
            res.json(response({
                status: 'ERROR',
                msg: 'Error al registrar equipo'
            })); 
        });
    } else {
        res.status(403).send();
    }
}

equipmentFacilitiesController.findAll = (req, res, next) => {
    EquipmentFacilities.findAll({
        include: Floor,
        attributes: {exclude: ['id_floor']},
    }).then(equipmentFacilitiess => {
        res.json(response({
            status: 'SUCCESS',
            data: equipmentFacilitiess
        }));
    }).catch((e) => {
        res.json(response({
            status: 'ERROR',
            msg: 'Error al buscar equipos'
        }));
    });
};

equipmentFacilitiesController.findById = (req, res, next) => {
    const id = req.params.equipmentFacilitiesId;
    findOne(id).then(equipmentFacilities => {
        if(equipmentFacilities){
            res.json(equipmentFacilities)
        } else {
            res.status(404).send();
        }
    }).catch(next);
};

module.exports = equipmentFacilitiesController;