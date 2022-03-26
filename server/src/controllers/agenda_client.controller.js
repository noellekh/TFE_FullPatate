const AgendaClient = require('../models/agenda_client.model.js');
const json = require ('sequelize');

exports.createAgendaClient = async function(req, res){
    try{
        const agendaC = await AgendaClient.create(req.body)
        return res.json({message:"Agenda créer !"})
    }catch(error){
        return res.json({message:error.message})
    }
}

exports.getAllAgendaClient = async function(req, res){
    try{
        const agendaC = await AgendaClient.findAll()
        return res.json(agendaC)
    }catch(error){
        return res.json({message:error.message})
    }
}

exports.getAgendaClientId = async function (req, res){
    try{
        const agendaC = await AgendaClient.findAll({
            where:{id_user:req.params.id_user}
        })
        return res.json(agendaC)
    }catch(error){
        return res.json({message: error.message})
    }
    
}

exports.DeleteAgendaClient = async function (req, res){
    try{
        const agendaC = await AgendaClient.destroy({
            where:{id_user:req.params.id_user}
        })
        return res.json('supp avec succès !')
    }catch(error){
        return res.json({message: error.message})
    }

}