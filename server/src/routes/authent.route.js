
const express = require('express');
const router = express.Router();
const authentController = require('../controllers/authent.controller');
const tokenController = require('../controllers/refresh_token.controller.js');
const authentMiddlware = require ('../middleware/verify_token.js');

 
router.get('/register', authentMiddlware.verifyToken,authentController.getUsersAuthent);
router.post('/register', authentController.Register);
router.post('/login', authentController.Login);
router.get('/token', tokenController.refreshToken);
router.delete('/logout', authentController.Logout);
 
module.exports=router
