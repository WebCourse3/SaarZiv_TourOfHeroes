const express = require('express');
const app = express();
const heroesRouter = require("../js/heroesRouter");
const bodyParser = require('body-parser');
let Logger = require('../ts/Logger').Logger;
let obj ={
	console: true,
	file: true,
	colors: true,
	logLevel: true
};

//Using Logger Framework
let loggerWithObj = new Logger("first",obj);
let loggerWithFile = new Logger("C:/Users/Jbt/WebstormProjects/Tour of Heroes/Configuration");
loggerWithObj.recreateLogFile();
loggerWithObj.error("thats from obj ...!");
loggerWithObj.info(" from obj aswell ...!");
loggerWithFile.warning("thats a warning with file declaration");
loggerWithFile.debug("thats a debug with file declaration");



app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));
app.use(express.static('C:\\Users\\Jbt\\WebstormProjects\\Tour of Heroes\\public'));
app.use("/heroes",heroesRouter);



app.get('/', function (req, res) {  res.send('hello world')});

app.listen(3000,function() {
	console.log('Server started on port 3000');
});

