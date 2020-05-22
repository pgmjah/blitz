# Blitz README
Blitz is a simple WebApp that can be played over the internet with a video chat, like Zoom.  The admin can control when questions begin, and
people can press their red button when they know the answer.  The admin can see the list of who buzzed in, in the order they hit the button.

So, the admin can then ask the users to answer try and answer the question.  If one fails, then the next can have a turn.

Turns can be timed, if desired.

## Install/Run
* Global - npm install -g pgmjah-blitz will install as a global node program.  To run: blitz config.json
* Local - npm install pgmjah-blitz. To run node blitz.js config.json

## Run Blitz
* To run the game client for Blitz go to: http://server:8000/blitz
* To run the admin for Blitz go to: http://server:8000/blitz/admin

## Config
***Note: If you run tserver without a config file, the server will use the current working directory (cwd) as the app root, and listen on port 8000.***
JSON file to configure the server.
```javascript
{
	"server":
	{
		"log":false,
		"silent":false
	},
	"webApp":
	{
		"port":8000,
		"webRoot":{"alias":"some_root_name", "dir":"some/dir"},
		"maps":
		[
			{"alias":"map_dir", "dir":"C:/some_dir/some_dir/dir_to_map"}
		]
	}
	
}
```
* server - global settings for the server.
	* log - write all server requests to 'test.server.log.txt'.
* webApp - information about how to configure the server for the app.
* port - the port for the server to listen on for the app (default 8000).
* webRoot - object with the web app's root directory (above which you can't navigate).
	* alias - the name of the root you want to use in the url (default "/").
	* dir - the physical directory mapped to the alias (default current working directory).
* maps - Optional array of objects to map url aliases to physical directories.
	* alias - the name of directory you want to use in the url.
	* dir - the physical directory mapped to the alias.

## Commands - command line
* cls - Clear the screen.
* clog - Clear the current log file.
* log - pipe the current log file to the screen.

## Changelog

* 0.0.4 - Updated readme, and also fixed some UI with timing issues, and status.

* 0.0.3 - Fixed resolving root server context when packaged for standalone running.

* 0.0.2 - Fixed package.json

* 0.0.1 - Initial commit.
