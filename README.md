# Authentication APP

Pretty simple authentication API using express, typeorm and JWT.

## Install

``git pull https://github.com/ionascimento/authentication-app``

``yarn add``

``yarn typeorm migration:run``

``yarn dev``

## Routes

Default port is **3030**.

**host:port/**
You must be authenticated to access.\n
GET

**host:port/users**
Creates a user\n
POST - Body format (JSON):
```json
{
  "name": "John Doe",
  "email": "johndoe@email.com",
  "password": "12345"
}
```

**host:port/users/:email**
Gets a user\n
GET

**host:port/token**
Gets a authentication token\n
POST - Body format (JSON):
```json
{
  "email": "johndoe@email.com",
  "password": "12345"
}
```
