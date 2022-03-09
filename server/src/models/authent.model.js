//const Sequelize = require('sequelize');
//const db = require ('../../config/db.config');

//const { sequelize, Sequelize } = require(".");

//const { DataTypes } = Sequelize;

module.exports = (sequelize, Sequelize)=>{
    

    const Authent = sequelize.define('users', {
        user_nom:{
        type: Sequelize.STRING
         },

        user_password :{
        type: Sequelize.STRING
        },

        user_surname:{
        type: Sequelize.STRING
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

        refresh_token:{
        type: Sequelize.TEXT
        }
    });
    return Authent;
} ;           
/*        
},{
    freezeTableName: true
});

(async()=>{
    await db.sync();
}) ();

//module.exports=Authent();
*/