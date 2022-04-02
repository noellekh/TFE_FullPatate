const mysql = require('mysql2');
const Sequelize = require('sequelize');

const db = new Sequelize('fp_db', 'balboa', 'fullpatate',{
    host: "localhost",
    dialect: 'mysql'

}
);
/*
const models = {};
models.Sequelize = Sequelize;
models.db = db;
models.users = require('../src/models/authent.model.js')(db, Sequelize)
models.agendaclient = require ('../src/models/agenda_client.model.js')(db, Sequelize)

models.agendaclient.belongsTo(models.users,{
    through: 'agendaclient_users',
    foreignKey:'id_agenda_client',
    otherKey: 'id_user'
    
});

models.users.belongsToMany(models.agendaclient,{
    through:'agendaclient_users',
    foreignKey:'id_user',
    otherKey:'id_agenda_client'
})
*/


module.exports = db;

/*

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'balboa',
    password: 'fullpatate',
    database: 'fp_db'

});

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('connecté à MSQL...')
})

module.exports = db;
*/