const express = require ('express');
const mysql = require ('mysql2');
const cors = require ('cors'); 
const app = express();

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

app.listen ('3001', () =>{
    console.log("running on port 3001")
})

app.use(cors()) // enable cors security headers


app.use(express.json())




app.get('/', (req, res) => {
    res.send('Full Patate Always !')
});

app.get('/api/users', (req, res) => {
    const SelectQuery = " SELECT * FROM `users`";
    db.query(SelectQuery, (err, result) => {
        if (err) throw err;
        res.send(result)
        console.log(result)
    })
})

