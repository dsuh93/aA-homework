// part 4 : async code is non-blocking

let eggState = "raw";


function putEggInBoilingWater() {
    console.log(`1. Putting ${eggState} egg in boiling water`);
    setTimeout(() => {
        eggState = "cooked";
        console.log(`2. Egg is ${eggState}!`);
        takeEggOutOfPot();
        eatEgg();
    })
}

}


// functino get pushed to the call stack when they're invoked and popped off when they return a value
//setTimeout is provided to you by the browser, the Web API takes care of the callback we pass to it
//when the timer has finished (1000ms in this case), the callback gets passed to teh callback queue
// the event loop looks at the callback queue and the call stack. if the call stack is empty, it pushes the first item in the queue onto the stack.
//the callback is added to the call stack and executred. once it returned a value, it gets popped off the call stack.

//readline and require libraries are provided by node env NOT by browser.

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const response = rl.question('What do you think of Javascript? ', answer => answer);

console.log(`Thank you for your valuable feedback: ${response}`);

const truth = rl.question('What do you really think of JavaScript? ', answer => answer);

console.log(`You said: ${truth}. Thank you for your honesty.`);
rl.close();

/* How do we fix it?
1. find async an sync codes
2. make sync code wait for async code to finish executing, put sync code INSIDE of async callback.
3. close reader after the final line you want to print in the callback.

Asyc code below;
    1) 
    2) 
*/

const response = rl.question('What do you think of JavaScript? ', answer => {
    console.log(`Thank you for your valuable feedback: ${response}`);
    const truth = rl.question('What do you really think of JavaScript? ', answer => {
        console.log(`You said: ${answer}. Thank you for your honesty.`);
        rl.close();
    });
});



