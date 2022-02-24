const express = require('express');
const router = express.Router();
 
const userController = require('../controllers/users.controller');

const agendaClientController =  require('../controllers/agenda_user.controller');


router.get('/all_users', userController.findAll);

router.post('/new_user', userController.create);

router.get('/:id_user', userController.findById);

router.put('/update_user/:id_user', userController.update);

router.delete('/delete_user/:id_user', userController.delete);


router.get('/all_agenda_user', agendaClientController.findAgendaUAll);

router.post('/new_agenda_user', agendaClientController.createAgendaUser);

router.get('/:id_agenda_client', agendaClientController.findByAngendaAUId);



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