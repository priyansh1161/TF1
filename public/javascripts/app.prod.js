var socket = io('https://iotbeast.herokuapp.com');
socket.on('connect', function(){
    console.log('socket connection established');
});
socket.on('power',function (data) {
   console.log(data);
});

$('document').ready(function(){
    $('#power').on('change',function (e) {
        console.log('hero');
        socket.emit('power',{ isPowered :$(this).prop('checked')});
    });
});