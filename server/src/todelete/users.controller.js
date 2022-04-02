const User = require('../models/user.model');


exports.findAll = function(req, res){
    User.findAll = (function(err, user){
        console.log('controller');
        if(err)
        res.sender(err);
        console.log('res', user);
        res.send(user);
    });
};

exports.create = function(req, res){
    const new_user = new User(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({error:true, message:'Remplissez tous les champs'});
    }else{
        User.create(new_user, function(err, user){
            if(err)
            res.send(err);
            res.json({error:false, message:"User ajouté avec succés !", data:user});
        });
    }
};

exports.findById = function(req, res) {
    User.findById(req.params.id_user, function(err, user) {
      if (err)
      res.send(err);
      res.json(user);
    });
};

exports.update = function(req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length===0){
        res.status(400).send({error:true, message:"Remplissez tous les champs svp"});
    }else{
        User.update(req.params.id_user, new User(req.body), function(err, user){
            if (err)
            res.send(err);
            res.json({error:false, message:'User modifié avec succes !'});
        });
    }
};

exports.delete = function(req, res) {
    User.delete( req.params.id_user, function(err, user) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'User supprimé avec succes'});
    });
};
    


/*
const UserModel = require('../models/user.model');
 
// get all employee list
exports.getUserList = (req, res)=> {
    //console.log('here all employees list');
    UserModel.getAllUsers((err, Allusers) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Users', Allusers);
        res.send(Allusers)
    })
}
 
// get employee by Name for earch by Name 
exports.getUserByName = (req, res)=>{
    //console.log('get emp by id');
    UserModel.getUserByName(req.params.first_name, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single employee data',user);
        res.send(user);
    })
}
 
 
// create new employee
exports.createNewUser = (req, res) =>{
    const UserReqData = new UserModel(req.body);
    console.log('UserReqData', UserReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.createUser(UserReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee Created Successfully', data: user.insertId})
        })
    }
}
 
 
// get employee by ID  for Update 
exports.getUserByID = (req, res)=>{
    //console.log('get emp by id');
    UserModel.getUserByID(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single user data',user);
        // res.json({"first_name":"Dheeraj"});
        res.send(JSON.stringify({ status: 200, error: null, response: user }));
    })
}
 
 
// update employee
exports.updateUser = (req, res)=>{
    const userReqData = new userModel(req.body);
    console.log('userReqData update', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.updateUser(req.params.id, userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee updated Successfully'})
        })
    }
}
 
// delete employee
exports.deleteUser = (req, res)=>{
    UserModel.deleteUser(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Employee deleted successully!'});
    })
}

*/