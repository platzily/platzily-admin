import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const server: FastifyInstance = Fastify({})

import { MongoConnection } from '../../db-connect-test/src/index';
import { User } from "../../db-connect-test/src/User";

const dbMongo = new MongoConnection('mongodb://localhost/test?retryWrites=true', [User]);

server.get('/users', async (req, res) => {
  dbMongo.getConnection().then(async function (connect) {
    const users = await connect.mongoManager.find(User);

    res.send({
      statusCode: 200,
      data: users,
      message: 'Users list',
    });
  });
});

server.patch('/users/:id/banned', async (req, res) => {
  res.send({
    statusCode: 200,
    message: 'Successfully!',
  });
});

server.get('/campaigns', async (req, res) => {
  res.send({
    statusCode: 200,
    data: [],
    message: 'Campaigns list',
  });
});

server.patch('/campaigns/:id/banned', async (req, res) => {
  res.send({
    statusCode: 200,
    data: [],
    message: 'Campaigns list',
  });
});

server.get('/links', async (req, res) => {
  res.send({
    statusCode: 200,
    data: [],
    message: 'Campaigns list',
  });
});

server.patch('/links/:id/banned', async (req, res) => {
  res.send({
    statusCode: 200,
    data: [],
    message: 'Campaigns list',
  });
});

// routes auth0
server.patch('/admin/users', async (req, res) => {
  res.send({
    statusCode: 200,
    data: [],
    message: 'users',
  });
});




import { startServe } from './server';

startServe(server);
