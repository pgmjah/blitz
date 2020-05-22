# Blitz README
Blitz is a simple WebApp that can be played over the internet with a video chat, like Zoom.  The admin can control when questions begin, and
people can press their red button when they know the answer.  The admin can see the list of who buzzed in, in the order they hit the button.

So, the admin can then ask the users to answer try and answer the question.  If one fails, then the next can have a turn.

Turns can be timed, if desired.

## Install/Run
* Global - npm install -g pgmjah-blitz will install as a global node program.  To run: blitz
* Local - npm install pgmjah-blitz. To run node blitz.js

## Run Blitz
* To run the game client for Blitz go to: http://server:8000/blitz
* To run the admin for Blitz go to: http://server:8000/blitz/admin

## Changelog

* 0.0.8 - Fixed some wordings in admin/server.

* 0.0.7 - Added multi-submit per turn, so users can buzz repeatedly each turn (very dangerous).

* 0.0.6 - Cleanup.

* 0.0.5 - Removed server config info...this is a dedicated server for Blitz, not general purpose.

* 0.0.4 - Updated readme, and also fixed some UI with timing issues, and status.

* 0.0.3 - Fixed resolving root server context when packaged for standalone running.

* 0.0.2 - Fixed package.json

* 0.0.1 - Initial commit.
