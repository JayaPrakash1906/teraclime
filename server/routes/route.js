const express = require('express');
const router = express.Router();
const {LevelTest, Counts, getDeviceRelatedData}= require('../controller/LevelTest');
const LoginController = require('../controller/LoginController');
router.get('/test', LevelTest);  
router.get('/data', Counts);
router.get('/getdevices', getDeviceRelatedData)
router.post('/login', LoginController);

module.exports = router;


