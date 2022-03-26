const express = require('express');
const router = express.Router();

const agendaClientController= require('../controllers/agenda_client.controller.js');

router.get('/all_agenda_client', agendaClientController.getAllAgendaClient);
router.get('/all_agenda_client/:id_user', agendaClientController.getAgendaClientId);
router.post('/add_agenda_client', agendaClientController.createAgendaClient);
router.delete('/delete_agenda_client', agendaClientController.DeleteAgendaClient);

module.exports=router;