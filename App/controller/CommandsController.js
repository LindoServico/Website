"use strict";

const viewManager = require('./../view/ViewManager.js');
const url = require('url');

const commands = [];

const commandManager = function (req,res,next)
{
	const urlInfo = url.parse(req.url, true);
	const parts = urlInfo.pathname.split('/');
	
	const page = parts[parts.length - 1];
	
	console.log('URL: ' + page);
	
	if(!commands.hasOwnProperty(page))
	{ 
		return next();
	}
	
	commands[page](req,(err,data) => 
	{
		if(err)
		{
			return next(err);
		}
		
		res.writeHead(200);
		res.write(data);
		res.end();
		
	})
}

//Available Commands

commands.home = function(req, cb)
{
	var obj = {};
	
	obj.title = "Lindo Serviço";
	
	cb(null,viewManager.home(obj));
}

commands.css = function(req, cb)
{
	var obj = {};
	
	obj.title = "Lindo Serviço";
	
	cb(null,viewManager.css);
}

module.exports = commandManager;