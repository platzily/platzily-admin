// Require the framework and instantiate it
const fastify = require("fastify")({ logger: { level: "info" } });
var jwt = require("fastify-jwt");
var jwks = require("jwks-rsa");

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-q-csylwc.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "admin-api-platzily.com",
  issuer: "https://dev-q-csylwc.us.auth0.com/",
  algorithms: ["RS256"],
});

app.use(jwtCheck);

// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3010);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
