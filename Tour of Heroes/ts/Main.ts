import { Level, Logger } from './Logger';

let obj ={
	console: true,
	file: true,
	colors: true,
	logLevel: true
};


let logger = new Logger("first",obj);
/*
logger.log(Level.warning,"test log warning");
logger.log(Level.info,"test log info");

logger.log(Level.debug,"test log debug");
logger.log(Level.error,"test log error");
*/
