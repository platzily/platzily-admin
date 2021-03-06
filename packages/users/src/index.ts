import { createConnection, Connection } from "typeorm";

createConnection({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "test",
  useUnifiedTopology: true,
}).then(function (connection) {
  console.log('connect to mongodb')
});

createConnection({
  type: 'postgres',
  url: 'postgres://admin:example@localhost/test'
}).then(function (connection) {
  console.log('connect to postgress')
});
