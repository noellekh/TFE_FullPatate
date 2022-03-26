const db = require ('../../config/db.config');
const Sequelize = require('sequelize');

const AgendaClient = db.define('agenda_client',{
    id_user:{
        type: Sequelize.INTEGER
    },

    id_agenda_client:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    agenda_user_date:{
        type: Sequelize.DATE

    }
},{
    freezeTableName: true,
    timestamps: false
});

(async()=>{
    await db.sync();
})();

module.exports=AgendaClient;