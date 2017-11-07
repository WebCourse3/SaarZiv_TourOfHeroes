import * as fs from "fs";

export enum Level {
	info = 'info',
	debug = 'debug',
	warning = 'warning',
	error = 'error'
}

export interface configuration {
	console: boolean,
	file: boolean,
	colors: boolean,
	logLevel: boolean
}

export class Logger {
	name: string = 'a';
	configurationObj: configuration;

	constructor(Name: string, confObj: configuration) {
		this.configurationObj = confObj;
		if(this,confObj.file){
			this.createNewLogFile();
		}
		this.name = Name;
	}

	log(level: Level, logs: string): void {
		// calls function according to level.
		let x = {
			'info': this.info.bind(this),
			'debug': this.debug.bind(this),
			'warning': this.warning.bind(this),
			'error': this.error.bind(this)
		};
		x[level](logs);
	}

	info(logs: string): any {
		if(this.configurationObj.console) {
			if (this.configurationObj.console) {
				if (this.configurationObj.colors) {
					console.log(`\x1b[32m%s\x1b[0m`, logs);
				}
				else {
					console.log(logs);
				}
			}
		}
	}

	warning(logs: string): void {
		if(this.configurationObj.console) {
			if (this.configurationObj.colors) {
				console.log(`\x1b[33m%s\x1b[0m`, logs);
			}
			else {
				console.log(logs);
			}
		}
	}

	debug(logs: string): void {
		if(this.configurationObj.console) {
			if (this.configurationObj.colors) {
				console.log(`\x1b[33m%s\x1b[0m`, logs);
			}
			else {
				console.log(logs);
			}
		}
	}

	error(logs: string): void {
		if(this.configurationObj.console) {
			if (this.configurationObj.colors) {
				console.log(`\x1b[31m%s\x1b[0m`, logs);
			}
			else {
				console.log(logs);
			}
		}
	}
	createNewLogFile():void{
		fs.openSync("C:\\Users\\Jbt\\WebstormProjects\\Tour of Heroes\\log.txt",'w');
	}
	writeToLogFile(log:string) :void{
		fs.appendFile("C:\\Users\\Jbt\\WebstormProjects\\Tour of Heroes\\log.txt",log, (err) =>{
			if(err){throw err;}
			console.log("added")}
		)
	}



}


