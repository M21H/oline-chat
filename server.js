const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
	cors: {
		origin: '*',
		// methods: ['GET', 'POST'],
		// credentials: true,
		// transports: ['websocket'],
	},
})

const PORT = 7777

const rooms = new Map()

app.get('/rooms', (req, res) => {
	rooms.set('hello', '')
	res.json(rooms)
})

io.on('connection', socket => {
	console.log('user connected: ', socket.id)
})

server.listen(PORT, error => {
	if (error) {
		throw Error(error)
	}
	console.log(`server started on port: http://locallhost:${PORT}`)
})
