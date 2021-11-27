# `service-db`

Package that allows to connect with mongodb and postgresql

## variables that you can import

```typescript
PostgresDb; // to connect postgres
MongoDb; // to connect mongo
```

## Api

You can use in both vars the function `makeConnection` which receives the entities as parameters which will be used in the connection.

## Usage

Add package in other package with lerna

```bash
lerna add service-db --scope=name-your-service
```

### Example

```typescript
import { PostgresDb, MongoDb } from "service-db";
import { EntityMongo } from "your-module";
import { EntityPostgres } from "your-module";

// connect to MongoDb
MongoDb.makeConnection({ entities: [EntityMongo] }).then(async function (
  connection
) {
  console.log(":D Mongo");
});

// connect to Postgres
PostgresDb.makeConnection({ entities: [EntityPostgres] }).then(async function (
  connection
) {
  console.log(":D Postgres");
});
```
