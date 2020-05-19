const EventEmitter = require("events");
const proc = require("child_process");
const util = require("util");
const fs = require("fs");

function CycleNodeProcess()
{
	EventEmitter.call(this);
	this._args = require("./args.js");
	this._fsw = fs.watchFile(this._args.process, {interval: 250}, this.startProcess.bind(this));
	console.log(util.format("Cycler: Listening to '%s'", this._args.process));
	process.title = util.format("CycleNodeProcess - Process '%s'", this._args);
	
	this._restarting = true;
	this.startProcess(this._args.arArgs);
	this._restarting = false;
}
util.inherits(CycleNodeProcess, EventEmitter);
var _p = CycleNodeProcess.prototype;

_p._cp = null;
_p.startProcess = function(curr, prev)
{
	if(this._restarting || (curr && prev) && (curr.mtime != prev.mtime))
	{
		if(this._cp)
		{
			this._cp.kill();
			this._cp = null;
		}
		else
		{
			console.log(util.format("Cycler: Start '%s'", this._args.process));
			this._cp = proc.fork(this._args.process, process.argv.slice(2), {"execArgv":["--inspect=localhost:9239"]});
			this._cp.on("close", function(code, signal)
			{
				console.log(util.format("Cycler: Stop '%s'", this._args.process));
				this._restarting = true;
				this.startProcess();
				this._restarting = false;
			}.bind(this));
		}
	}
}
var cProcess = new CycleNodeProcess();

