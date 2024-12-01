const express = require('express');
const app = express();

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})

const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', socket => {

    console.log('client connected')
    socket.on('chacha', (msg) => {
        console.log(msg)

        io.emit('chachi', msg)
    })
});
server.listen(3000, () => {
    console.log(`Server is running http://localhost:3000`);
});
