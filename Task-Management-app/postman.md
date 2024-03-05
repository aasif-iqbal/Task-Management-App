# Task Management app

### Welcome page
**Method:** GET 

**Request URI:** `http://localhost:3000`

**Request Body:**
Response - 200 OK
```TEXT
Welcome to my app..
``````
#

Post
url: http://localhost:3000/user/registration

{
    "name":"Aasif iqbal",
    "email":"aasif@gmail.com",
    "password":"12345",
    "age":29
}

Errors:
Status:422 Unprocessable Entity


{
    "errors": [
        {
            "type": "field",
            "value": "Aasif iqbal",
            "msg": "User name has non-alphanumeric characters",
            "path": "name",
            "location": "body"
        },
        {
            "type": "field",
            "value": "",
            "msg": "Invalid value",
            "path": "type",
            "location": "body"
        }
    ]
}

@Post
url: http://localhost:3000/user/registration
Raw- Json
{
    "name":"asif90",
    "email":"aasif@gmail.com",
    "password":"12345",
    "age":23,
    "type":"user"
}

status 200
Response:
{
    "userSaved": {
        "name": "asif90",
        "email": "aasif@gmail.com",
        "age": 23,
        "type": "user",
        "_id": "65e4c5bb4023951cd833e93f",
        "__v": 1
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWU0YzViYjQwMjM5NTFjZDgzM2U5M2YiLCJpYXQiOjE3MDk0OTE2NDMsImV4cCI6MTcwOTc1MDg0M30.AcQEP7alJPabFHG0emUWvTfd5lBbBeyMOaEsVPz9aB4"
}

----------------------
Login - user
POST http://localhost:3000/user/login

Body -> raw - Json
{
    "email":"aasif@gmail.com",
    "password":"12345"
}

Response:
{
    "user": {
        "_id": "65e4c5bb4023951cd833e93f",
        "name": "asif90",
        "email": "aasif@gmail.com",
        "age": 23,
        "type": "user",
        "__v": 2
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWU0YzViYjQwMjM5NTFjZDgzM2U5M2YiLCJpYXQiOjE3MDk0OTE5MDAsImV4cCI6MTcwOTc1MTEwMH0.SoWXIvKvvEiT5v7hR_oCj6yrVrE9Ny7gti_f9Nbb5u4"
}

======================
After login: Copy Current Token
TO Check OWN Profile
GET: http://localhost:3000/users/me

Authorization 
Type - Bearer:Bearer -- Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWU0YzViYjQwMjM5NTFjZDgzM2U5M2YiLCJpYXQiOjE3MDk0OTE5MDAsImV4cCI6MTcwOTc1MTEwMH0.SoWXIvKvvEiT5v7hR_oCj6yrVrE9Ny7gti_f9Nbb5u4 

Response:
{
    "_id": "65e4c5bb4023951cd833e93f",
    "name": "asif90",
    "email": "aasif@gmail.com",
    "age": 23,
    "type": "user",
    "__v": 2
}


#
Update : 
PUT : http://localhost:3000/user/updateProfile/me

Body - raw  - json

Request:
``````
{
    "name":"Aasif009",
    "email":"aasif@gmail.com",
    "age":29,
    "password":"12345",
    "type":"User"
}
``````
Response: 200 OK
``````
{
    "_id": "65e4c5bb4023951cd833e93f",
    "name": "Aasif009",
    "email": "aasif@gmail.com",
    "age": 29,
    "type": "User",
    "__v": 2
}
``````
#

DELETE 

DELETE : http://localhost:3000/user/deleteProfile/me
Set Auth token - 

Response
``````
{
    "message": "User deleted successfully",
    "deletedUser": {
        "_id": "65e74577b55d0c4cea205070",
        "name": "Jhon43",
        "email": "jhon43@gmail.com",
        "age": 23,
        "type": "user",
        "__v": 1
    }
}
``````
After Delete -- 
DELETE : http://localhost:3000/user/deleteProfile/me
Set Auth token - 

Response -- 500 Internal Server Error
``````
{
    "messsage": "Please authenticate first"
}
``````

#
LOGOUT (It will logout from current devices)
POST : http://localhost:3000/user/logout

Response - 200 OK
Token deleted.

#
LOGOUT ALL  
> [!NOTE]
> It will Logout from all devices - token empty

POST : http://localhost:3000/user/logoutAll

Response - 200 OK
``````
Logout from all devices
``````