const express = require('express');
const router = express.Router();
 
const userController = require('../controllers/users.controller');

router.get('/all_users', userController.findAll);

router.post('/new_user', userController.create);

router.get('/:id_user', userController.findById);

router.put('/update_user/:id_user', userController.update);

router.delete('/delete_user/:id_user', userController.delete);

module.exports=router
 
/*
// get all employees
router.get('/', userController.getUserList);
 
// get employee by ID
router.get('/:id',userController.getUserByID);
 
 
// get ID for Update 
router.get('/searchRecord/:first_name',userController.getUserByName);
 
// create new employee
router.post('/', userController.createNewUser);
 
// update employee
router.put('/:id', userController.updateUser);
 
// delete employee
router.delete('/:id',userController.deleteUser);
 
module.exports = router;

*/