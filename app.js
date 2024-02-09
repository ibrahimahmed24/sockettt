const express= require('express')
const server = require('http').createServer();
const io = require('socket.io')(server);
const  app = express()
io.on('connection', client => {
    io.emit('hi','hi ibrahim')
});

app.get('/',function (req,res) {
    res.send('hiiiiiii')

})
server.listen(5000);
 
 

