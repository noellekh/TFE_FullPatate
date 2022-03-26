const Training = require ('../models/training.model.js');
const json = require ('sequelize');


exports.createTraining = async function(req, res){
    try{
        const train = await Training.create({
            training_name: "Squat",
            training_descri: "Ecarter les jambes à la largeur des épaules, genoux vers l'extérieur. Descendre le dos bien droit et remonter."
        })
        res.json({message:"OK"})
    }catch(error){
        res.json({message:error.message})
    }
}

exports.getAllTraining = async function (req, res){
    try{
        const train = await Training.findAll()    
        return res.json(train)
    }catch(error){
        return res.json({message: error.message})
    }

}

exports.getTraining = async function(req, res){
    try{
        const train = await Training.findAll({
            where:{id_training: req.params.id_training}
        })
        return res.json(train)

    }catch(error){
        return res.json({message: error.message})

    }
}

/*
exports.findAll = function(req, res){
    Training.findAllTraining= (function(err, training){
        console.log('training controller')
        if (err){
            return res.send(err);

        }else{
            console.log('res', training);
             return res.send(training)
        }
    
    });
};
*/