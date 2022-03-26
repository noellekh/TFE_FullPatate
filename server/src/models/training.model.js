const db = require ('../../config/db.config');
const Sequelize = require('sequelize');


const Training = db.define('training',{
    id_training:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    training_name:{
        type: Sequelize.STRING
    },

    training_descri:{
        type: Sequelize.TEXT
    }
},{
    freezeTableName: true,
    timestamps: false
});

(async()=>{
    await db.sync();
})();
/*
var Training = function(training){
    this.id_training = training.id_training;
    this.training_name = training.training_name;
    this.training_descri = training.training_descri;
};

Training.findAll = function(result){
    db.query('SELECT * from training', function(err, res){
        if(err){
            console.log('error training: ', err);
            result(null, err);
        }else{
            console.log('training: ', res);
            result(null, res);
        }
    });
};
*/
module.exports=Training;