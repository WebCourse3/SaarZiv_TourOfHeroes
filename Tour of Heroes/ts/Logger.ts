import * as fs from "fs";
import { isUndefined } from 'util';

export enum Level {
	info = 'info',
	debug = 'debug',
	warning = 'warning',
	error = 'error'
}
enum Color {
	red = '\x1b[31m%s\x1b[0m',
	green = "\x1b[32m%s\x1b[0m",
	yellow = "\x1b[33m%s\x1b[0m"

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
	//constructor(file:string);Question for reviewer :
	// what is the meaning of this line of code? (in case it was`nt commented)
	constructor(file:string,confObj?:configuration) :void{
		if(!(isUndefined(file) && isUndefined(confObj))){
			this.implementationConstructor(file,confObj);
		}
		else if(!(isUndefined(file))) {
			this.implementationConstructor(file);
		}
	}

	implementationConstructor(filePath: string, confObj?: configuration) :void {
		if(isUndefined(confObj)){
			this.readConfFile(filePath);
		}
		else{
			this.name = filePath;
			this.configurationObj = confObj;
		}
	}

	public log(level: Level, ...logs: string[]): void {
		let x = {
			'info': Color.green,
			'debug': Color.yellow,
			'warning': Color.yellow,
			'error': Color.red
		};
		this.writeLog(x[level],level,logs);
	}
	private  writeLog(color : Color ,level:Level ,logs :string[]){
		if (this.configurationObj.console) {
			if (this.configurationObj.colors) {
				logs.forEach((log) => console.log(color,log))
			}
			else {
				logs.forEach((log) => console.log(log));
			}
		}
		if(this.configurationObj.file){
			logs.forEach((log) => this.writeToLogFile(level+":"+log+"\n"))
		}
	}
	public readConfFile(path:string){
		if(fs.existsSync(path)) {
			let fileContent = fs.readFileSync(path, "utf8");
			let jsonConfObj = JSON.parse(fileContent);
			this.implementationConstructor(path, jsonConfObj);
		}
		else{
			throw new SyntaxError("the file does`nt exists.")
		}

	}
	public recreateLogFile():void{
		fs.openSync("C:\\Users\\Jbt\\WebstormProjects\\Tour of Heroes\\log.txt",'w');
	}
	private writeToLogFile(log:string) :void{
		fs.appendFileSync("C:\\Users\\Jbt\\WebstormProjects\\Tour of Heroes\\log.txt",log);
	}
	public error(...logs:string[]){
		this.writeLog(Color.red, Level.error, logs);
	}
	public warning(...logs:string[]){
		this.writeLog(Color.yellow, Level.warning, logs);
	}
	public info(...logs:string[]){
		this.writeLog(Color.green, Level.info, logs);
	}
	public debug(...logs:string[]){
		this.writeLog(Color.yellow, Level.debug, logs);]
	}

}


