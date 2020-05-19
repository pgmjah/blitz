var util = require("util");
var args = process.argv.slice(2);
var oArgs = {};
while(args.length)
{
	var cmd = args.shift().substring(1);
	var val = null;
	if(args[0] && args[0][0] != "-")
		val = args.shift();
	oArgs[cmd] = val;
}
module.exports = oArgs
