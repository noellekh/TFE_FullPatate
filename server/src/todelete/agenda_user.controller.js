const Agenda_user = require('../models/agenda_user.model');

exports.findAgendaUAll = function(req, res){
    Agenda_user.findAgendaUAll = (function(err, agenda_user){
        console.log("controller agenda user")
        if(err)
        res.sender(err);
        console.log('res agenda', agenda_user);
        res.send(agenda_user);
    });
};

exports.createAgendaUser = function(req, res){
    const new_agenda_user = new Agenda_user(req.body);

    Agenda_user.createAngendaUser(new_agenda_user, function(err, agenda_user){
        if(err)
        res.send(err);
        res.json({error:false, message: "Agenda créer", data:agenda_user});
    });


};

exports.findByAngendaAUId = function(req, res){
    Agenda_user.findAngendaUAll(req.params.id_agend_client, function(err, agenda_user){
        if(err)
        res.send(err);
        res.json(agenda_user);

    });
};

