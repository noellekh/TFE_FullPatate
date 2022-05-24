const db = require ('../../config/db.config');
const Sequelize = require('sequelize');
const Authent = require('./authent.model.js')

const AgendaClient = db.define('agenda_client',{

    id_agenda_client:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    id_user:{
        type: Sequelize.INTEGER,
        references:{
            key:'id_user'
        }
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
//AgendaClient.hasOne(Authent,{foreignKey:'id_user'});

AgendaClient.associate=(models)=>{
    AgendaClient.belongsTo(Authent,{foreignKey:'id_user'})

};





(async()=>{
    await db.sync();
})();

module.exports=AgendaClient;