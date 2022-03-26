
const dotenv = require('dotenv');
const cookieParser = require ('cookie-parser');
const express = require ('express');
//const mysql = require ('mysql2');
const cors = require ('cors'); 
const bodyParser = require('body-parser');
const app = express();
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    methods: ["GET", "POST", "PUT", "DELETE"],
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE"
}
dotenv.config();
app.use(cors(corsOptions)); //{credentials:true, origin:'http:/:localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
 
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
const usersRoutes = require('./src/routes/users.route.js');
const productRoutes = require('./src/routes/product.route.js');
const authentRoutes = require ('./src/routes/authent.route.js');
const trainingRoutes = require('./src/routes/training.route.js');
const agendaClientRoutes = require('./src/routes/agenda_client.route.js');
 
// create employee routes
app.use('/api/v1/users', usersRoutes);
app.use('/api/v2/products', productRoutes);
app.use('/api/v1/authent', authentRoutes);
app.use('/api/v1/training', trainingRoutes);
app.use('/api/v1/agenda_client', agendaClientRoutes);
 
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
