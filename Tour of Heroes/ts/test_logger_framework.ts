import { Level, Logger } from './Logger';

let obj ={
	console: true,
	file: true,
	colors: true,
	logLevel: true
};



let loggerWithObj = new Logger("first",obj);
let loggerWithFile = new Logger("C:/Users/Jbt/WebstormProjects/Tour of Heroes/Configuration");
loggerWithObj.recreateLogFile();
loggerWithObj.error("thats from obj ...!");
loggerWithObj.info(" from obj aswell ...!");
loggerWithFile.warning("thats a warning with file declaration");
loggerWithFile.debug("thats a debug with file declaration");




