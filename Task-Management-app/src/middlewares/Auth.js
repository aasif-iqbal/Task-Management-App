const { header } = require('express-validator');
const User = require('../models/user.model')
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    
    try{
        const token = req.header('Authorization').replace('Bearer ', '');
        // console.log('From Auth:',token);
        const decoded = jwt.verify(token, 'myKey');
        // Fetch only that user, who's token is match with auth-token provided by postman.
        const user = await User.findOne({ _id: decoded._id, 'tokens.token':token });

        if(!user){
            throw new Error();
        }
                
        req.token = token;
        req.user = user;
        
        next();    
    }catch(err){
        console.log(err);
        res.status(500).json({messsage:'Please authenticate first'});
        // res.status(401).send({error:'Please authenticate.'});
    }
    
}

module.exports = auth;

/*
Real-time
https://stackoverflow.com/questions/40539609/how-to-add-authorization-header-in-postman-environment


for testing:

POST: http://localhost:3000/user/login
---------------Hxxxxs --Body-----------------------
--------------------------------------------------- 
                0-raw                  JSON-v
--------------------------------------------------- 
            {
                "email": "john@gmail.com",
                "password": "12345"
            }
---------------------------------------------------            

---------------Headers ----------------------------
key: Authorization 
value: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNkYmEwNWNmNTgyMTBhOTA0NTZmZjUiLCJpYXQiOjE3MDg0MjQwMDUsImV4cCI6MTcwODQ2MDAwNX0.zYACW8YH35NMbYn5jqDf6NjDVAAutPuZ5nEmNYSLPA8


token:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNkYmEwNWNmNTgyMTBhOTA0NTZmZjUiLCJpYXQiOjE3MDg0MjQwMDUsImV4cCI6MTcwODQ2MDAwNX0.zYACW8YH35NMbYn5jqDf6NjDVAAutPuZ5nEmNYSLPA8
*/