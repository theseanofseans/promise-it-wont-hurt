
/*
  #####################################################################
  ##                      ~~  do_some_work  ~~                       ##
  #####################################################################

Let's do several operations against "remote" machines

Sending and fetching data from computers/processes other than your 
application is an increasingly common task in the world of node.js
and the browser.  Many times, you will need to gather data from 
several sources, perform operations on it, and send some data back out.

Task

Let's talk to two remote processes over HTTP being run by your friend
and mine, "localhost"

Port 7000: Faux session cache (redis or some such thing) 
Port 7001: Faux database (mongo, level, postgres etc)

As in the previous lesson, use the "q-io" module to create promises
as wrappers for HTTP responses.  HINT: You will probably need more than
one promise...

1. Send an HTTP GET request to the session cache on port 7000.  A JSON payload
   will be returned to you containing a primary key called "id".  
2. Grab that id from the session response and send an HTTP GET request to 
   your database on port 7001 to the url "localhost:70001/<id>".
3. If successfully done, your database will return a user object.  console.log 
   it to win many nerd-points.

Hint
Don't forget that q-io's read method returns a buffer.  You will need to convert
it to a string and JSON.parse it to complete this lesson!


 » To print these instructions again, run: `promise-it-wont-hurt print`.
 » To execute your program in a test environment, run:
   `promise-it-wont-hurt run program.js`.
 » To verify your program, run: `promise-it-wont-hurt verify program.js`.
 » For help with this problem or with promise-it-wont-hurt, run:
   `promise-it-wont-hurt help`.
*/

/*
https://github.com/kriskowal/q-io#http
*/

var HTTP = require("q-io/http");
var response= HTTP.read("http://localhost:7000/");

response.then( function(id){
	var response2= HTTP.read( "http://localhost:7001/" + id );
	response2.then( JSON.parse ).then( console.log , console.error );
} , console.error );

