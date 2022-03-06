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
You must be authenticated to access
__GET__

**host:port/users**
Creates a user
__POST__ - Body format (JSON):
```json
{
  "name": "John Doe",
  "email": "johndoe@email.com",
  "password": "12345"
}
```

**host:port/users/:email**
Gets a user
__GET__

**host:port/token**
Gets a authentication token
__POST__ - Body format (JSON):
```json
{
  "email": "johndoe@email.com",
  "password": "12345"
}
```
