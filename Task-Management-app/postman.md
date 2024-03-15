# Task Management app

***Routes***
| Request | Method | Request URL |
|---|---|---|
| Welcome Page | GET | http://localhost:3000 |
| Registration | POST | http://localhost:3000/user/registration |
| Login | POST | http://localhost:3000/user/login |
| My Profile | GET | http://localhost:3000/users/me |
| Update Profile | PUT | http://localhost:3000/user/updateProfile/me |
| Delete Profile | DELETE | http://localhost:3000/user/deleteProfile/me |
| Logout | POST | http://localhost:3000/user/logout |
| Logout All | POST | http://localhost:3000/user/logoutAll |
| Add Task | POST | http://localhost:3000/task/add |
| Show Task | GET | http://localhost:3000/task/show |
| Update Task | PATCH | http://localhost:3000/task/update/{task_id} |
| Delete Task | DELETE | http://localhost:3000/task/delete/{task_id} |
| SortByTaskStatus| GET | http://localhost:3000/tasks?completed=true |
| SortByTaskOrder | GET | http://localhost:3000/tasks?createdAt:asc |
| Pagination | GET | http://localhost:3000/tasks?limit=3&skip=0 |
| Pagination | GET | http://localhost:3000/tasks?limit=3&skip=0 |
| Upload Image | POST | http://localhost:3000/user/image |

## User - Section
### Welcome page
**Method:** GET 

**Request URI:** `http://localhost:3000`

**Request Body:**
Response - Success: 200 OK
```TEXT
Welcome to my app..
``````
***Registration***

**Method:** POST 

**Request URI:** `http://localhost:3000/user/registration`

**Request Body:**

``````json
{
    "name":"Aasif iqbal",
    "email":"aasif@gmail.com",
    "password":"12345",
    "age":29
}
``````
Response - Errors: 422 Unprocessable Entity
``````json
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
``````
***Method: POST***

**Request URI:** http://localhost:3000/user/registration

**Request Body:**
``````json
{
    "name":"asif90",
    "email":"aasif@gmail.com",
    "password":"12345",
    "age":23,
    "type":"user"
}
``````

Response- Success: Created 201
``````json
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
``````
#

Login - user
Method: POST

Request URI: http://localhost:3000/user/login

Body -> raw - Json
``````json
{
    "email":"aasif@gmail.com",
    "password":"12345"
}
````````

Response body
``````json
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
``````

# 

***Login***

http://localhost:3000/user/login

**Authorization**
Type : Brear Token - @#Token#@

Request body 
``````json
{}
``````
Response: 400 Bad Request
``````json
{}
``````
#
***After login : Copy Current Token***

TO Check OWN Profile

Method: GET

Request URI: http://localhost:3000/users/me

Authorization 
Type - Bearer:Bearer -- Token(expired:1 day): eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWU0YzViYjQwMjM5NTFjZDgzM2U5M2YiLCJpYXQiOjE3MDk0OTE5MDAsImV4cCI6MTcwOTc1MTEwMH0.SoWXIvKvvEiT5v7hR_oCj6yrVrE9Ny7gti_f9Nbb5u4 

Response body:
``````json
{
    "_id": "65e4c5bb4023951cd833e93f",
    "name": "asif90",
    "email": "aasif@gmail.com",
    "age": 23,
    "type": "user",
    "__v": 2
}
``````
#
Update 

Method: PUT 
 
Request URI: http://localhost:3000/user/updateProfile/me

Body - raw  - json

Request:
``````json
{
    "name":"Aasif009",
    "email":"aasif@gmail.com",
    "age":29,
    "password":"12345",
    "type":"User"
}
``````
Response: 200 OK

``````json
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
# 
## Task - Section
Add Task By Admin
Method: POST
URI - http://localhost:3000/task/add
Request body
``````json
{
    "description":"Task-1",
    "completed":false,
    "assignedUser":"65e7752d2a819cf01a438765"
}
``````
Response 201 created
``````json
{
    "status": {
        "description": "Task-1",
        "completed": false,
        "owner": "65e4c5bb4023951cd833e93f",
        "assignedUser": "65e7752d2a819cf01a438765",
        "_id": "65e778722b589c5d453c895e",
        "createdAt": "2024-03-05T19:54:26.909Z",
        "updatedAt": "2024-03-05T19:54:26.909Z",
        "__v": 0
    }
}
``````

Request
``````json
{
    "description":"Task-3",
    "completed":true,
    "assignedUser":"65e7752d2a819cf01a438765"    
}
``````
Response - Body

Status code: 400 Bad Request

``````json
{
    "error": "User can have only two tasks."
}
``````

**When User [Not Admin] want to add Task.**

Status : 401 Unauthorized

``````json
{
    "msg": "Unauthorized User Type"
}
``````
#

Show Task

Method : GET

Request URI : http://localhost:3000/task/show

Request Body

Set Bearer token - Auth Token

``````json
{
    "tasks": [
        {
            "_id": "65e89fac572e81b694a1c881",
            "description": "Learn Nodejs",
            "completed": true,
            "owner": "65e4c5bb4023951cd833e93f",
            "assignedUser": {
                "_id": "65e775522a819cf01a438769",
                "name": "Martin",
                "email": "martin@gmail.com",
                "age": 29,
                "type": "user",
                "__v": 2
            },
            "createdAt": "2024-03-06T16:54:04.557Z",
            "updatedAt": "2024-03-06T16:54:04.557Z",
            "__v": 0
        }
    ]
}
``````
#

Method GET

http://localhost:3000/task/show

Status 200 Ok

Request - Body
``````json
{
    "Msg": "No Task Has been Assigned to this User"
}
``````

#

Update Task

Method - PATCH

Request URI - http://localhost:3000/task/update/65e89fac572e81b694a1c881

Request Body

``````json
{
    "description": "NestJs",
    "completed":true
}
``````
Status : 400 Bad Request
``````json
{
    "msg": "Not Allowed - UnAutherised User"
}
``````
URI - http://localhost:3000/task/update/65e89fac572e81b694a1c881

``````json
{
    "description": "Nodejs-NestJs",
    "completed":true
}
``````
Request Body
Status 200 Ok

``````json
{
    "_id": "65e89fac572e81b694a1c881",
    "description": "Nodejs-NestJs",
    "completed": true,
    "owner": "65e4c5bb4023951cd833e93f",
    "assignedUser": "65e775522a819cf01a438769",
    "createdAt": "2024-03-06T16:54:04.557Z",
    "updatedAt": "2024-03-06T20:07:55.026Z",
    "__v": 0
}
``````
#
**Delete**

Request URI - http://localhost:3000/task/delete/65e89fac572e81b694a1c881

Status:  200 - Ok

``````json
{
    "msg": "Task Deleted"
}
``````

***Wrong Task Id***

http://localhost:3000/task/delete/65e89fac572e81b694a1c8811

status: 500 - Internal Server Error

``````json
{
    "stringValue": "\"{ _id: '65e89fac572e81b694a1c8811' }\"",
    "valueType": "Object",
    "kind": "ObjectId",
    "value": {
        "_id": "65e89fac572e81b694a1c8811"
    },
    "path": "_id",
    "reason": {},
    "name": "CastError",
    "message": "Cast to ObjectId failed for value \"{ _id: '65e89fac572e81b694a1c8811' }\" (type Object) at path \"_id\" for model \"Task\""
}
``````

#

***Correct TaskId But UnAutherised User***

Method: DELETE

Response URI: http://localhost:3000/task/delete/65e77bc0c1416166ccc985a0

Status: 401 Unauthorized

``````json
{
    "msg": "Not Allowed - UnAutherised User"
}
``````
# 
***SortByTaskStatus***

Sort Task By Status - Completed = true | false

Method: GET

Request URI: http://localhost:3000/tasks?completed=true

``````json
[
    {
        "_id": "65e77975a138eff33c58f9ab",
        "description": "Task-2",
        "completed": true,
        "owner": "65e4c5bb4023951cd833e93f",
        "assignedUser": "65e7752d2a819cf01a438765",
        "createdAt": "2024-03-05T19:58:45.365Z",
        "updatedAt": "2024-03-05T19:58:45.365Z",
        "__v": 0
    },
    {
        "_id": "65e77bad8f4f89b14c939b2a",
        "description": "Task-4",
        "completed": true,
        "owner": "65e4c5bb4023951cd833e93f",
        "assignedUser": "65e7752d2a819cf01a438765",
        "createdAt": "2024-03-05T20:08:13.347Z",
        "updatedAt": "2024-03-05T20:08:13.347Z",
        "__v": 0
    },
    {
        "_id": "65e77bc0c1416166ccc985a0",
        "description": "Task-5",
        "completed": true,
        "owner": "65e4c5bb4023951cd833e93f",
        "assignedUser": "65e7752d2a819cf01a438765",
        "createdAt": "2024-03-05T20:08:32.413Z",
        "updatedAt": "2024-03-05T20:08:32.413Z",
        "__v": 0
    }
]
````````

#
***SortByTaskOrder***

Sort By Asc | Sort By Desc

Method: GET

Request URI: http://localhost:3000/tasks?createdAt:asc
- OR - 
Request URI: http://localhost:3000/tasks?createdAt:desc

``````json
[
    {
        "_id": "65e778722b589c5d453c895e",
        "description": "Task-1",
        "completed": false,
        "owner": "65e4c5bb4023951cd833e93f",
        "assignedUser": "65e7752d2a819cf01a438765",
        "createdAt": "2024-03-05T19:54:26.909Z",
        "updatedAt": "2024-03-05T19:54:26.909Z",
        "__v": 0
    },
    {
        "_id": "65e77975a138eff33c58f9ab",
        "description": "Task-2",
        "completed": true,
        "owner": "65e4c5bb4023951cd833e93f",
        "assignedUser": "65e7752d2a819cf01a438765",
        "createdAt": "2024-03-05T19:58:45.365Z",
        "updatedAt": "2024-03-05T19:58:45.365Z",
        "__v": 0
    },
    {
        "_id": "65e77a850c600c1f37ed098c",
        "description": "Task-3",
        "completed": false,
        "owner": "65e4c5bb4023951cd833e93f",
        "assignedUser": "65e7752d2a819cf01a438765",
        "createdAt": "2024-03-05T20:03:17.306Z",
        "updatedAt": "2024-03-05T20:03:17.306Z",
        "__v": 0
    },
    {
        "_id": "65e77bad8f4f89b14c939b2a",
        "description": "Task-4",
        "completed": true,
        "owner": "65e4c5bb4023951cd833e93f",
        "assignedUser": "65e7752d2a819cf01a438765",
        "createdAt": "2024-03-05T20:08:13.347Z",
        "updatedAt": "2024-03-05T20:08:13.347Z",
        "__v": 0
    },
    {
        "_id": "65e77bc0c1416166ccc985a0",
        "description": "Task-5",
        "completed": true,
        "owner": "65e4c5bb4023951cd833e93f",
        "assignedUser": "65e7752d2a819cf01a438765",
        "createdAt": "2024-03-05T20:08:32.413Z",
        "updatedAt": "2024-03-05T20:08:32.413Z",
        "__v": 0
    }
]
``````
#

Pagination

Method: GET

Request URI: http://localhost:3000/tasks?limit=3&skip=0

``````json
[
    {
        "_id": "65e778722b589c5d453c895e",
        "description": "Task-1",
        "completed": false,
        "owner": "65e4c5bb4023951cd833e93f",
        "assignedUser": "65e7752d2a819cf01a438765",
        "createdAt": "2024-03-05T19:54:26.909Z",
        "updatedAt": "2024-03-05T19:54:26.909Z",
        "__v": 0
    },
    {
        "_id": "65e77975a138eff33c58f9ab",
        "description": "Task-2",
        "completed": true,
        "owner": "65e4c5bb4023951cd833e93f",
        "assignedUser": "65e7752d2a819cf01a438765",
        "createdAt": "2024-03-05T19:58:45.365Z",
        "updatedAt": "2024-03-05T19:58:45.365Z",
        "__v": 0
    },
    {
        "_id": "65e77a850c600c1f37ed098c",
        "description": "Task-3",
        "completed": false,
        "owner": "65e4c5bb4023951cd833e93f",
        "assignedUser": "65e7752d2a819cf01a438765",
        "createdAt": "2024-03-05T20:03:17.306Z",
        "updatedAt": "2024-03-05T20:03:17.306Z",
        "__v": 0
    }
]
``````
#
***Upload Image***

Method: POST

Request URI: http://localhost:3000/user/image

| Body | _
|----- |----|
| Form - data | _ | 
| Key         | Value |
| upload  [file]| Select Files

Response Body:

Status: 201 Created

``````text
Image uploaded succesfully
``````



