import Fastify, { FastifyInstance } from 'fastify';
import { MongoDb } from "../../service-db/src/index";

const server: FastifyInstance = Fastify({})

import { User } from "../../service-users/src/entities/User";

server.get('/users', async (req, res) => {
  MongoDb.getConnection().then(async function (connect) {
    // console.log(connect);

    const users = await connect.manager.find(User);

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
