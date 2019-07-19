const express = require('express');

const server = express();

const middleware = require('./config/middleware');

// import routers
const {authRouter,
  usersRouter,
} = require('../resources');

middleware(server); // third-party middleware

server.use(express.json());

// routers
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/users/sleeps", usersRouter);

server.get('/', (req, res) => {
  res.send(`<p>Testing Server</p>`)
});

module.exports = server;
