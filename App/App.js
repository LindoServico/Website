"use strict"

const port = process.argv[2] || 8080;

//Dependencies
const express = require("express");
const favicon = require("serve-favicon");
const CommandsController = require('./controller/commandsController.js');


//SERVER
const server = express();
server.use(favicon(__dirname + '\\res\\logo.ico'));
server.use(CommandsController);

	//REQUESTS
	server.get('/', (req, res) => res.redirect('/home'));
	server.get('/res/logo' , (req,res) => {res.sendFile(__dirname + '/res/logo.ico');});


server.listen(port, () => {console.log('server launched on port: ' + port)});