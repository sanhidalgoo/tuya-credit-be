<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

  <p align="center">Backend service for CrediTuya application made in <a href="https://nestjs.com/" target="_blank">NestJS</a> .</p>
    <p align="center">
<img src="https://img.shields.io/github/issues/juansedo/tuya-credit-be?style=flat-square" alt="GitHub issues" />
<img src="https://img.shields.io/github/stars/juansedo/tuya-credit-be?style=flat-square" alt="GitHub stars" />
<img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square" alt="Mantained" />
</p>

## Description

A full backend service for CrediTuya application.

## Requirements

- A `mariadb` database is required. You can start a local database using this [docker image](https://hub.docker.com/_/mariadb).

- Fill the `.env.example` file and change its name by `.env`

## Installation

```bash
$ npm install
```

## Running the migrations

```bash
# generate new migrations from *.entity.ts modified
npm run migrations:generate -- -n NAME # Change NAME

# migrations up
npm run migrations:run

# show applied migrations
npm run migrations:show

# migrations revert
npm run migrations:revert

# drop the whole schema
npm run migrations:drop
```

`src/database/migrations` is the migrations folder.

## Running the app

```bash
# development
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```

## Contributors

|Username|Name||
|------|-------|-----|
|**hfbanilatq**|Hector Fabio Banilat Quintero|<a href="https://github.com/hfbanilatq"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" width=20></a>|
|**dcalleg707**|David Calle González|<a href="https://github.com/dcalleg707"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" width=20></a>|
|**juansedo**|Juan Sebastián Díaz Osorio|<a href="https://github.com/juansedo"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" width=20></a>|
|**sanhidalgoo**|Santiago Hidalgo Ocampo|<a href="https://github.com/sanhidalgoo"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" width=20></a>|
|**cmilojr**|Juan Camilo Jiménez Rojas|<a href="https://github.com/cmilojr"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" width=20></a>|
|**Jriosv**|Julián Ríos Vásquez|<a href="https://github.com/jriosv"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" width=20></a>|


## License

...