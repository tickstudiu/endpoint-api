# ENDPOINT API

Clone the repo:

```bash
git https://github.com/tickstudiu/endpoint-api.git
cd endpoint-api
```

Install the dependencies:

```bash
yarn install

# or

npm install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Table of Contents

- [Features](#features)
- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Inspirations](#inspirations)

## Features

- **ES9**: latest ECMAScript features
- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **API documentation**: with [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)

## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

```bash
# run all tests
yarn test

# run all tests in watch mode
yarn test:watch
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
APP_PORT=21454

# DATABASE
MYSQL_HOST=localhost
MYSQL_PORT=443
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=
MYSQL_LIMIT_TIME=10

# SERVER
SERVER_KEY=/etc/letsencrypt/live/<domain>.com/privkey.pem
SERVER_CERT=/etc/letsencrypt/live/<domain>.com/cert.pem
SERVER_CA=/etc/letsencrypt/live/<domain>.com/chain.pem
```

## Project Structure

```
public
 |--assets         
     |--postman     # Postman file
 
src
 |--config          # Environment variables and configuration related things
 |--controllers     # Route controllers (controller layer)
 |--middlewares     # Custom express middlewares
 |--models          # Mongoose models (data layer)
 |--routes          # Routes
 |--services        # Business logic (service layer)
 |--utils           # Utility classes and functions
 |--validations     # Request data validation schemas
 |--app.js          # Express app
 |--server.js       # App entry point
 
tests               # Tester file
```
## API Documentation

### API Endpoints

List of available routes:

**Init routes**:\
`GET /v1/init/mysql/database/` - init database mysql

**Docs routes**:\
`GET /v1/docs/` - documentation

**Outsider routes**:\
`POST /v1/outsider/login` - login\
`POST /v1/outsider/deposit` - add balance player\
`POST /v1/outsider/withdraw` - remove balance player\
`POST /v1/outsider/player/transfer` - watch transaction player\
`POST /v1/outsider/player/balance` - check balance\
`PUT /v1/outsider/change/password` - change password player\
`GET /v1/outsider/agent/credit` - check credit agent\
`POST /v1/outsider/outstanding` - check outstanding (tickets are active)\
`POST /v1/outsider/xRegister` - register\
`POST /v1/outsider/tickets` - check all tickets\
`POST /v1/outsider/player/turnover` - check turnover player\
`POST /v1/outsider/player/information` - watch information player\
`POST /v1/outsider/player/total/deposit` - watch add balance history player\
`POST /v1/outsider/player/total/withdrawal` - watch remove balance history player\
`POST /v1/outsider/member/list/date` - watch player created time\
`POST /v1/outsider/player/outstanding` - check outstanding player

## Inspirations

- [hagopj13/node-express-boilerplate](https://github.com/hagopj13/node-express-boilerplate)
- [danielfsousa/express-rest-es2017-boilerplate](https://github.com/danielfsousa/express-rest-es2017-boilerplate)
- [madhums/node-express-mongoose](https://github.com/madhums/node-express-mongoose)
- [kunalkapadia/express-mongoose-es6-rest-api](https://github.com/kunalkapadia/express-mongoose-es6-rest-api)

## License

[MIT](LICENSE)
