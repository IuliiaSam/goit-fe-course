const http = require('http');
const url = require('url');
const port = 3001;

const morgan = require('morgan');
const router = require('./routes/router');

const logger = morgan('combined');

const startServer = port => {

  const server = http.createServer((request, response) => {

    const parsedUrl = url.parse(request.url);

    const func = router[parsedUrl.pathname] || router.default;
    console.log('func', func);

    logger(request, response, () => func(request, response));
  });

  server.listen(port);

};

module.exports = startServer;