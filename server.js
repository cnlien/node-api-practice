const express = require('express');

const showsRouter = require('./data/routers/shows/showsRouter.js');
const charsRouter = require('./data/routers/characters/charsRouter.js');

const helmet = require('helmet');
const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/shows', showsRouter)
server.use('/api/characters', charsRouter)
server.use(logger);

server.get('/', (req, res) => {
    res.send(`<h2>API is running...</h2>`);
});

  
function logger(req,res,next) {
    console.log(`Method: ${req.method} request`)
    console.log(`URL: ${req.url}`)
    console.log(`AT: ${new Date().toISOString()}`)
    next();
}



module.exports = server;