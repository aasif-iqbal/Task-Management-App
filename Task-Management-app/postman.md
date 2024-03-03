@Post
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