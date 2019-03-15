/*
var express = require('express');
var socket = require('socket.io')

var app = express();

app.use(express.static('game'));

app.get('/', function (req, res) {
  res.sendFile('game/main_page.html', {root : __dirname})
});

var server = app.listen(3000);

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	
}*/

var mysql = require("mysql");
var MySQL = mysql.createConnection({
	host: "localhost",
	user: "root"
});

			MySQL.connect(function(err) {
				  if (err) throw err;
				  alert("Connected!");
				});