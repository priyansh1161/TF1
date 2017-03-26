module.exports = function(server) {
    let io = require('socket.io')(server);
    io.on('connection', function (socket) {
        console.log('connection est');
        socket.on('power',(data) =>{
            console.log(data);
            socket.broadcast.emit('power',data);
        })
    });

};