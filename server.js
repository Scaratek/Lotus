const path = require('path');
const socketIO = require('socket.io');
const express = require('express');
const http = require('http');

const config = require('./config');

const app = express();
const server = http.createServer(app).listen(config.port, config.host);
const io = socketIO(server);

// Admin
app.use(config.adminPath, (req, res, next) => {
    const authHeader = req.query.auth;

    if (authHeader === config.auth) {
        next();
    } else {
        res.sendStatus(403);
    };
});

app.use(config.adminPath, express.static(path.join(__dirname, 'admin')));

// User
app.use(express.static('user'));

// Logging
io.on('connection', (socket) => {
    console.log('A client connected.');

    // Handle Code Execution
    socket.on('executeCode', (code) => {
        console.log('Received code to execute:', code);

        // Broadcast Code
        io.emit('codeExecution', code);
    });

    // Disconnection
    socket.on('disconnect', () => {
        console.log('A client disconnected.');
    });
});

console.log(`App listening at ${config.host}:${config.port}`);
