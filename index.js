const net = require('net');
const port = 2222;

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/conFusion';
const DateTimes = require('./models/dateTime');

// Create mongodb connection
const connect = mongoose.connect(url);
connect.then((db) =>{
  console.log('Connected to the mongoDB server');
}, (err)=> { console.log(err) });

// Create TCP server
const server = net.createServer();
server.listen(port, () => {
    console.log(`Server listening for connection requests on socket localhost:${port}`);
});

// Connection is create with client.
server.on('connection', (socket) => {
    console.log('A new connection has been established.');

    // Recieve data from client
    socket.on('data', (chunk) =>  {
        DateTimes.create(JSON.parse(chunk))
            .then((datetime) => {
                let okMsg = {
                    status: "ok",
                    error: null
                };
                socket.write(JSON.stringify(okMsg));
            })
            .catch((err) => {
                let errMsg = {
                    status: "err",
                    error: err
                };
                socket.write(JSON.stringify(errMsg));
            });
    });

    socket.on('end', () => {
        console.log('Closing connection with the client');
    });

    socket.on('error', (err) => {
        console.log(`Error: ${err}`);
    });
});