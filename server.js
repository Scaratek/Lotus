const socketIO = require('socket.io');
const express = require('express');
const http = require('http');

// Configuration
const host = '0.0.0.0';
const port = 3000;

const app = express();
const server = http.createServer(app).listen(port, host);
const io = socketIO(server);

// Admin and User 
app.use('/admin', express.static('admin'));
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

console.log(`App listening at ${host}:${port}`);