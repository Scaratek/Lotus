const path = require('path');
const socketIO = require('socket.io');
const express = require('express');
const http = require('http');

const config = require('./config');

const app = express();
const server = http.createServer(app).listen(config.port, config.host);
const io = socketIO(server);

// Requests
app.use('/admin', (req, res, next) => {
    const authHeader = req.query.auth;

    if (authHeader === config.auth) {
        next();
    } else {
        res.redirect('/auth');
    }
});

app.use('/auth', express.static(path.join(__dirname, 'auth')));
app.use('/admin', express.static(path.join(__dirname, 'admin')));
app.use(express.static(path.join(__dirname, 'user')));

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