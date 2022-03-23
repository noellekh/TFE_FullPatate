const Sequelize = require('sequelize');
const db = require ('../../config/db.config');

//const { sequelize, Sequelize } = require(".");

//const { DataTypes } = Sequelize;

//module.exports = (sequelize, Sequelize)=>{
    

    const Authent = db.define('users', {
        id_user:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
        user_nom:{
        type: Sequelize.STRING
         },

        user_surname:{
            type: Sequelize.STRING
            },

        user_password :{
        type: Sequelize.TEXT
        },



        user_birth:{
        type: Sequelize.DATE
        },

        user_email:{
        type: Sequelize.STRING
        },
        
        user_phone:{
        type: Sequelize.STRING
        },
    
        user_sex:{
        type: Sequelize.STRING
        },
        user_street:{
        type: Sequelize.STRING
        },
        postal:{
        type: Sequelize.INTEGER
        },
        newsletter:{
        type: Sequelize.STRING
        },

    },{
        freezeTableName: true,
        timestamps: false
    });

    (async()=>{
        await db.sync();
    }) ();
    

module.exports = Authent;
/*        
},{
    freezeTableName: true
});

(async()=>{
    await db.sync();
}) ();

//module.exports=Authent();
*/