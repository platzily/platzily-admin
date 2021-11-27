import Fastify, { FastifyInstance } from 'fastify';

const server: FastifyInstance = Fastify({})

server.get('/users', async (req, res) => {
  res.send({
    statusCode: 200,
    data: [],
    message: 'Users list',
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
