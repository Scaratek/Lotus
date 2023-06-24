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

console.log(`App listening at ${host}:${port}`);