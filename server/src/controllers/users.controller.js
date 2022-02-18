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