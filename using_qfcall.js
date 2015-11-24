
/*
  #####################################################################
  ##                      ~~  using_qfcall  ~~                       ##
  #####################################################################

Using Q's fcall to simplify our code

Wrapping a value or synchronous function call in a promise is a 
fairly easy pattern to capture in a generic way.

The "Q" library has a function for just this purpose called fcall.

Task

Use fcall to replace the entire parsePromised function from the previous lesson.


 » To print these instructions again, run: `promise-it-wont-hurt print`.
 » To execute your program in a test environment, run:
   `promise-it-wont-hurt run program.js`.
 » To verify your program, run: `promise-it-wont-hurt verify program.js`.
 » For help with this problem or with promise-it-wont-hurt, run:
   `promise-it-wont-hurt help`.
*/

var json= process.argv[2];
var q = require('q');
q.fcall( JSON.parse , json).then(null, console.log);

