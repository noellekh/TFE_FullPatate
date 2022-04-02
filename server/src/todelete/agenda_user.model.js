var db  = require('../../config/db.config');

var Agenda_user = function(agenda_user){
    this.id_user = agenda_user.id_user;
    this.id_agenda_client = agenda_user.id_agenda_client;
    this.agenda_user_date = agenda_user.agenda_user_date;

};

Agenda_user.createAngendaUser = function(newAgendaUser, result){
    db.query("INSERT INTO agenda_client set ?", newAgendaUser, function(err, res){
        if(err){
            console.log("error create agenda_client: ", err);
            result(err, null);
        }else{
            console.log("id_agenda_client: ", res.insertId);
            result(null, res.insertId);
        }
    });
};


Agenda_user.findByAngendaAUId = function(id_agenda_client, result){
    db.query("SELECT * from agenda_client where id_agenda_client =?", id_agenda_client, function(err, res){
        if (err){
            console.log("error agenda_client: ", err);
        }else{
            result(null, res);
        }
    });
};

Agenda_user.findByAgendaUserId = function(id_user, result){
    db.query("SELECT * from agenda_client where id_user=?", id_user, function(err, res){
        if(err){
            console.log("error agenda_client user: ", err);

        }else{
            result(null, res);
        }
    });
};

Agenda_user.findAngendaUAll = function(result){
    db.query("SELECT * from agenda_client", function(err, res){
        if(err){
            console.log("error findAgendaUALL: ", err);
            result(null, err);
        }else{
            console.log("agenda user: ", res);
            result(null, res);
        }
    });
};

Agenda_user.deleteAngendaUser = function(id_agenda_client, result){
    qd.query("DELETE FROM agenda_client WHERE id_agenda_client=?",[id_agenda_client], function(err, res){
        if(err){
            console.log("error delete agenda user: ", err);
            result(null, err);
        }else{
            result(null, res);
        }

    });


};

module.exports=Agenda_user;

