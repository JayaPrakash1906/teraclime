const express = require('express');
const cors = require('cors');
const LevelTest = require('./routes/route.js');
const Counts = require('./routes/route.js')
const app = express();
const getDeviceRelatedData =  require('./routes/route.js');
const client = require('./utils/conn.js');
const LoginController= require('./routes/route'); 

app.use(cors());
app.listen('3007', (err)=> {
    if(err) process.exit(1);
    console.log('working')
})
app.use('/api/v1/', LevelTest);
app.use('/api/v1/', Counts);
app.use('/api/v1/', getDeviceRelatedData);
app.use('/api/v1/', LoginController);


