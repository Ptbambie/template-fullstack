const express = require('express');
const { userRouter } = require('./src/routes');
const app = express();


app.use(express.json()); //elle transforme les données en .json

const APIRouter = express.Router();

APIRouter.get('/version', function(req,res) {
    const{version} = require('./package.json')

     return res.json({version})
})

APIRouter.use('/users', userRouter);
app.use('/api', APIRouter);

app.listen(8080, function(){
    console.log('APi is running on 8080');
})
