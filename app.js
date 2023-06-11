const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app).listen(3000, '0.0.0.0');
const io = socketIO(server);

const port = 3000;

// Serve Public
app.use(express.static('public'));

// Handle WebSocket Connections
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

console.log(`App listening at http://0.0.0.0:${port}`);
