
/*
  #####################################################################
  ##                    ~~  an_important_rule  ~~                    ##
  #####################################################################

There's always a catch....(lol pun)

Promises are designed to emulate synchronous control flows.
If any of them throw an exception, the exception will bubble up 
through the stack until it is caught by a catch block or 
hits the global context where it will be thrown.

In the code below, each expression is evaluated one after the 
other.  If any expression throws an exception, ALL SUBSEQUENT 
EXPRESSIONS WILL NOT BE EXECUTED and the catch block
will catch and handle it.

try {
  doStuff()
  doMoreStuff()
} catch (err) {
  complainAboutJavascript(err);
}

With promises, we can achieve a very similar control flow as shown 
(assume all functions return promises) :

doStuff()
.then(doMoreStuff)
.then(null, complainAboutJavascript);

Maybe we should combine the last two lines since one is a fulfill
handler and the other is a rejection handler?  NO!  While this
might initially seem sensible consider what would happen if 
doMoreStuff threw an error.  Since the promise returned from it 
would be rejected, it would look for the NEXT rejection handler
to handle it.  

Remember: A promise can NEVER resolve more than once.  

It is, therefore, a best practice to always put a rejection handler 
at the bottom of your promise chain (much like a catch block).

It is worth pointing out that both the synchronous AND asynchronous 
code have the same problem.  If the rejection handler itself throws
an error you are going to have a bad time.  

Many promise libraries try to ameliorate this problem for you
by providing a "done" handler that simple handles any uncaught
errors.  The rule of thumb is this: 

If you are NOT returning a value from your promise to a caller, 
then attach a "done" handler to gaurd against uncaught exceptions".

An example is shown below:

doStuff()
.then(doMoreStuff)
.then(null, complainAboutJavascript)
.done();

Task

We are going to demonstrate this to ourselves by creating a chain
of functions that ALL print to the console.  

1. Create a function "throwMyGod" that throws an Error with 
   text "OH NOES"
2. Create a function "iterate" that prints the first argument 
   (an integer) to it and then returns that argument + 1;
3. Create a promise chain that wraps your iterate method using Q's
   fcall then a series of iterations that attempts to perform iterate
   10 times.  
4. Attach console.log as a rejection handler at the bottom of your
   chain.
5. Insert a call to "throwMyGod" after your 5th call of "iterate"

If you have done this correctly, your code should print 1,2,3,4,5, 
"[Error: OH NOES]".  It's important to notice that the thrown exception was 
turned into a rejected promise which caused the rejected promise to 
travel down the promise chain to the first available rejection handler.

Bonus

Try swapping your rejection handler from console.log to throwMyGod.
Your program will now throw an exception in the global context!  Ahh!
Try to fix this using the approach described above.


 » To print these instructions again, run: `promise-it-wont-hurt print`.
 » To execute your program in a test environment, run:
   `promise-it-wont-hurt run program.js`.
 » To verify your program, run: `promise-it-wont-hurt verify program.js`.
 » For help with this problem or with promise-it-wont-hurt, run:
   `promise-it-wont-hurt help`.
*/

//1. Create a function "throwMyGod" that throws an Error with text "OH NOES"

//2. Create a function "iterate" that prints the first argument 
//   (an integer) to it and then returns that argument + 1;
//3. Create a promise chain that wraps your iterate method using Q's
//   fcall then a series of iterations that attempts to perform iterate
//   10 times.  
//4. Attach console.log as a rejection handler at the bottom of your
//   chain.
//5. Insert a call to "throwMyGod" after your 5th call of "iterate"

function throwMyGod() {
	throw new Error( "OH NOES" );
}

function iterate(arg) {
	console.log(arg);
	return arg + 1;
}

var q = require('q');
q.fcall(
	function() {
		for (var i= 1; i <= 10; i++ )  {
			iterate(i);
			if (i == 5)
				throwMyGod()
		}
	}
).then(null, console.log);

