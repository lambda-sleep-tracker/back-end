const express = require('express');

const server = express();

const middleware = require('./config/middleware');

// import routers
const {
  usersRouter,
} = require('../resources');

middleware(server); // third-party middleware

server.use(express.json());

// routers
server.use("/api/users", usersRouter);

server.get('/', (req, res) => {
  res.send(`<p>Testing Server</p>`)
});

module.exports = server;
