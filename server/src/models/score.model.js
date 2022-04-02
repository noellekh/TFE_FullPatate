const Sequelize = require('sequelize');
const db = require ('../../config/db.config');
//const Authent = require('./authent.model.js');
//const Training = require('./training.model.js');

const Score = db.define('score',{
    id_score:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    score:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    best_score:{
        type: Sequelize.INTEGER,
        allowNull: true
        
    }

},{
    tableName:'score',
    freezeTableName: true,
    timestamps: false
}
);

//Score.belongsTo(Authent);
//Score.belongsTo(Training);

(async()=>{
    await db.sync();
}) ();

module.exports =Score;