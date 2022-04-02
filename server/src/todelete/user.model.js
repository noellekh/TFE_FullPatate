var db  = require('../../config/db.config');

/*
            id_user
            user_nom
            user_password
            user_surname;
            user_birth;
            user_email;
            user_phone;
            user_sex;
            user_street;
            postal;
            newsletter;
*/
 
var User = function(user){
    this.id_user  = user.id_user;
    this.user_nom  = user.user_nom;
    this.user_password = user.user_password;
    this.user_surname = user.user_surname;
    this.user_birth = user.user_birth;
    this.user_email = user.user_email;
    this.user_phone = user.user_phone;
    this.user_sex = user.user_sex;
    this.user_street = user.user_street;
    this.postal = user.postal;
    this.newsletter = user.newsletter;

};


User.create = function (new_user, result){
    db.query("INSERT INTO users set ?", new_user, function (err, res){
        if (err){
            console.log("error:", err);
            result(err, null);
        }else{
            console.log("id: ", res);
            result(null, res);
        }
    });
};


User.findById = function(id_user, result){
    db.query("SELECT * from users where id_user = ?", id_user, function(err, res){
        if(err){
            console.log("error: ", err);
        }else{
            result(null, res);
        }
    });
};

User.findAll = function(result){
    db.query("SELECT * from users", function(err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('user: ', res);
            result(null, res);
            res.json(result);
        }
    });
};


User.update = function (id_user, user, result){
    db.query("UPDATE users SET  user_nom=?, user_password=?, user_surname=?, user_birth=?, user_email=?, user_phone=?, user_sex=?, user_street=?, postal=?, newsletter=? WHERE id_user=?",
    [user.user_nom, user.user_password, user.user_surname, user.user_birth, user.user_email, user.user_phone, user.user_sex, user.user_street, user.postal, user.newsletter, id_user], function(err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

User.delete = function(id_user, result){
    db.query("DELETE FROM users WHERE id_user=?", [id_user], function(err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

module.exports=User;


 /*
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
*/
