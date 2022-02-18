var db  = require('../../config/db.config');
 
var User = function(user){
    this.id_user  = user.id;
    this.user_nom  = user.fname;
    this.user_password = user.pwd;
    this.user_surname = user.lname;
    this.user_birth = user.birthday;
    this.user_email = user.email;
    this.user_phone = user.phone;
    this.user_sex = user.gender;
    this.user_street = user.street;
    this.postal = user.postal;
    this.newsletter = user.newsletter;

}
 
// get all Users
User.getAllUsers = (result) =>{
    db.query('SELECT * FROM users', (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('Users fetched successfully');
            result(null,res);
        }
    })
}
 
// get User by Name for Search Data by name 
User.getUserByName = (first_name, result)=>{
    db.query('SELECT user_nom FROM users', first_name, (err, res)=>{
        if(err){
            console.log('Error while fetching User by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}
 
// create new User
User.createUser = (userReqData, result) =>{
    db.query('INSERT INTO users (id_user, user_nom, user_password, user_surname, user_birth, user_email, user_phone, user_sex, user_street, postal, newsletter)', userReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
            console.log(err);
        }else{
            console.log('User created successfully');
            result(null, res)
        }
    })
}
 
 
// get User by ID for update
User.getUserByID = (id, result)=>{
    db.query('SELECT * FROM users WHERE id_user=?', id, (err, res)=>{
        if(err)
        {
            console.log('Error while fetching User by id', err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    })
}
 
 
// update User
User.updateUser = (id, userReqData, result)=>{
    db.query("UPDATE users SET first_name=?,last_name=?,email=?,phone=?,birthday=?,pwd=?, street=?, postal=?, newsletter=?, gender=?  WHERE id_user = ?", [userReqData.first_name,userReqData.last_name,userReqData.email,userReqData.phone,userReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the User');
            result(null, err);
        }else{
            console.log("User updated successfully");
            result(null, res);
        }
    });
}
 
// delete User
User.deleteUser = (id, result)=>{
    db.query('DELETE FROM users WHERE id_user=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the User');
            result(null, err);
        }else{
            result(null, res);
        }
    })
    // db.query("UPDATE Users SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the User');
    //         result(null, err);
    //     }else{
    //         console.log("User deleted successfully");
    //         result(null, res);
    //     }
    // });
}
 
module.exports = User;