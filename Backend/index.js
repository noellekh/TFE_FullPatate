const express = require ('express');
const mysql = require ('mysql2');
const cors = require ('cors'); 
const { application } = require('express');
const app = express();

const db = mysql.createPool ({
    host: 'fullpatate',
    user: 'balboa',
    password: 'fullpatate',
    database: 'fp_db'

})

app.use(cors()) // enable cors security headers


app.use(express.json())
app.use(express.urlencoded({extended :true}));

app.get('/', (req, res) => {
    res.send('Full Patate Always !')
});

app.listen ('3001', () =>{})
