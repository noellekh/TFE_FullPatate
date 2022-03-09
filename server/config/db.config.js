const mysql = require('mysql2');
const Sequelize = require('sequelize');

const db = new Sequelize('fp_db', 'balboa', 'fullpatate',{
    host: "localhost",
    dialect: 'mysql'

}
);


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