const express = require('express');
const router = express.Router();

const trainingController =  require('../controllers/training.controller.js');

router.get('/all_training', trainingController.getAllTraining);
router.get('/all_training/:id_training', trainingController.getTraining);
router.post('/create_training', trainingController.createTraining);

module.exports=router