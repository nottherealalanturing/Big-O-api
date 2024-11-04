const pino = require('pino');

const pinologger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
    },
  },
  redact: ['req.headers.authorization'],
});

module.exports = pinologger;
