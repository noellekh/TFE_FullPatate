const express = require ('express');
//const mysql = require ('mysql2');
const cors = require ('cors'); 
const bodyParser = require('body-parser');
const app = express();


app.use(cors())

 
// setup the server port
const port = process.env.PORT || 3001;
 
// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: true}));
 
// parse request data content type application/json
app.use(bodyParser.json());
 
// define root route
app.get('/', (req, res)=>{
    res.send('Full Patate');
});
// import employee routes
const usersRoutes = require('./src/routes/users.route');
 
// create employee routes
app.use('/api/v1/users', usersRoutes);
 
// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});




// connection to the database
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


app.listen ('3001', () =>{
    console.log("running on port 3001")
})

app.use(cors()) // enable cors security headers


app.use(express.json())




app.get('/', (req, res) => {
    res.send('Full Patate Always !')
});

// getting all information of the users ==> for test
app.get('/api/users', (req, res) => {
    const SelectQuery = " SELECT * FROM `users`";
    db.query(SelectQuery, (err, result) => {
        if (err) throw err;
        res.send(result)
        console.log(result)
    })
})



// Connexion

app.get('/connexion', (req,res)=>{
    const name = req.body.name;
    const firstname = req.body.firstname;
    const birthday = req.body.birthday ;
    const phone = req.body.phone ;
    const mail = req.body.mail ;
    const gender = req.body.gender ;
    const pwd = req.body.pwd ;
    const street = req.body.street ;
    const postal = req.body.postal ;
    const neswletter = req.body.nwsletter ;

    db.query(
        "SELECT * FROM users WHERE user_email = ? and user_password = ? "
    )


})

*/
