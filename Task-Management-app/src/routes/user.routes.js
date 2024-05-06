const express = require('express');
const userController = require("../controllers/userController.js");
const router = express.Router();
const multer = require('multer');
const auth = require('../middlewares/Auth.js');

const mailService = require("../services/mailServices.js");

//configure multer
const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload a valid image file'))
        }
        cb(undefined, true)
    }
}) 

// Welcome mail using mailgen
// router.post('/send-mail', mailService.sendMail);
router.post('/send-mail', mailService.welcomeMail);

router.get('/', function(req, res){    
    res.send(`Welcome to my app..`);
})

router.post('/user/registration', userController.registration);
// Read user

// router.get('/users/:id', auth, userController.readUser);
router.get('/users/me', auth, userController.readUser);

// router.get('/users/me/checkPassword', userController.checkPassword);

// Update user - using put we update specific field.
//router.put('/updateUser/:id', userController.updateUserInfo);
router.put('/user/updateProfile/me', auth, userController.updateUserInfo);

router.post('/user/login', userController.login); // when user login. auth-token is created with expire:10hrs

//delete user - profile delete
router.delete('/user/deleteProfile/me', auth, userController.deleteUser);

router.post('/user/logout', auth, userController.logout);
router.post('/user/logoutAll', auth, userController.logoutAll);

/*

In Postman 
[Request] POST - [url] http://localhost:3001/user/image
select - Body -> form-data
Key - upload [type:file] | value: select File
*/

router.post('/user/image', upload.single('upload'), userController.uploadImage);

module.exports = router;