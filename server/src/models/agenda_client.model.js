const db = require ('../../config/db.config');
const Sequelize = require('sequelize');
const Authent = require('./authent.model.js')

const AgendaClient = db.define('agenda_client',{

    id_agenda_client:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    agenda_user_date:{
        type: Sequelize.DATE

    }
},{   
    tableName: 'agenda_client',
    freezeTableName: true,
    timestamps: false
});
//AgendaClient.hasOne(users, {foreignKey: 'id_user'});
//AgendaClient.hasMany(Authent,{foreignKey:'id_user'});


//AgendaClient.belongsTo(Authent)




(async()=>{
    await db.sync();
})();

module.exports=AgendaClient;