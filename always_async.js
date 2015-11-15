
/*
Are promises always resolved asynchronously?

The Promises/A+ spec declares that promises MUST fire their resolution/rejection 
function on the same turn of the event loop that they are created on.  This is 
very important because it eliminates the possibility of execution order
varying and resulting in indeterminate outcomes.

You can expect that the functions passed to the "then" method of a promise will be
called on the NEXT turn of the event loop.

Task

In this lesson, we are going to prove to ourselves that this is the case by 
writing a script that does the following:

1. Create a promise using the "Q" library
2. Pass console.log to the "then" method of our promise
*3. Resolve the promise with a parameter "SECOND"
4. Print "FIRST" to the console using console.log

*Do this synchronsouly and NOT in a setTimeout as was the case in previous lessons

Your script will pass and show you that despite the promise being resolved synchronously,
the provided function is not executed until the next turn of the event loop.

Thus, you should see "FIRST", "SECOND"


 » To print these instructions again, run: `promise-it-wont-hurt print`.
 » To execute your program in a test environment, run:
   `promise-it-wont-hurt run program.js`.
 » To verify your program, run: `promise-it-wont-hurt verify program.js`.
 » For help with this problem or with promise-it-wont-hurt, run:
   `promise-it-wont-hurt help`.
*/


