// Middleware

const helmet = require('helmet'); // masks express for security
const morgan = require('morgan'); // logger
const cors = require('cors');

module.exports = server => {
  server.use(helmet());
  server.use(morgan('dev'));
  server.use(cors());
}
