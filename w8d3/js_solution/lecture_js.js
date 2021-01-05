// Semicolons Matter
const x = function (num) {return 3 * num };
(10 + 5) > 20 ? console.log('big') : console.log('small');
console.log(x);

//wihtout a semicolon on the end of line 3, logs 'big' then undefined
// lines 3 and 4 are getting evaluate as ONE expression
    // the ; indicates the expression is complete and the following code will be separate
// defines then IMMEDIATELY invokes it
    // so 3 * (10 + 5) is put into the ternary
    // which then sets x to be the result of the ternary, aka console.log("big")
        // the result of console.log is undefined, which was assigned to x
// with the ;, logs 'small' then the function

const x = function (num) { return 3 * num }(10 + 5) > 20 ? console.log('big') : console.log('small');
const x = function (num) { return 3 * num }(15) > 20 ? console.log('big') : console.log('small');
const x = 45 > 20 ? console.log('big') : console.log('small');
const x = console.log('big'); //console.log is invoked here
const x = undefined;

VARIABLE DECLARATION 

'const' is block-scoped:
const x = 5;
if (true) { // creates a new scope
    const x = 10; //declaring it for just the scope of the if block
    //inner scope declaratino is going to take precedence over the outer scope
    // if we don't have line 26, we'll still have access to the variable defined in the outer scope
    console.log(`Inside the if block: ${x}`);
}
console.log(`Outside the if block: ${x}`);

//HOISTING

let favFood = 'Taco';
if (true) {
    // like saying 'let favFood' here
    console.log(favFood);
    let favFood = 'Pizza'; // not assigned till here
    console.log(favFood)
}
console.log(favFood);

// variables' declaration (not assignment) are 'hoisted' to the top of their scope
// memory is allocated for a variable at the top of its scope

let favFood = 'Taco';
if (true) {
    // like saying 'let favFood' here
    console.log(favFood);
    favFood = 'Pizza'; // favFood is assigned without a declaration
    console.log(favFood)
}
console.log(favFood);

// so you'll get Taco Pizza Pizza


//FUNCTION DECLARATION

//Named functions: hoisted to top of their scope along with declaration
sayHello(); //doesn't error 
function sayHello(){
    console.log("hello");
}
// function functionName(parameters){body of function}
// named functions' names AND their definitions are hoisted to the top of their scope!

// Functions stored in a variable:

//-Anonymous
anonSayHello(); // this will error out b/c it's stored in a variable,
// it's hoisted in the same way variables are hoisted
const anonSayHello = function(){
    console.log("hello, anonymously")
}

//-Fat arrow
const sayHelloFatArrow = () => {
    console.log("hello, fat arrow")
}
sayHelloFatArrow();

// (parameters) => { function body }
// we'll use these a lot eventually, but alter in the js portion of the course
// fat arrows are newer syntax
// has quirks that fx differently, but we shouldn't rely on these while we're learning
// also will see the other ways in older codebases (which you're likely to have on the job)!

//FUNCTION INVOCATION

// 3 main ways to invoke a function

//- method style
    // - looks like calling a method (though still needs parenthesis)
    // - ex: cat.purr();
    // - context is the 'receiver' of the method ('cat')
//- function style
    //- invoking function like a standalone fx (without receiver)
    //- ex: functionName()
    //- context: window/global object
//- constructor style
    //- calling a function with the 'new' keyword
    // - used to create an 'instance of a class'
    //- const instance = new ClassType(parameters)
    //- context is the new object being constructed

function whatIsThis(){
    console.log(this);
}

const shadow = {
    favFood: "goldfish crackers",
    sayHi: function(){
        console.log("Hi");
        console.log(this);
    }
}

function Person(favFood){
    this.favFood = favFood // store the fav food on the context of this function
    this.tellFavFood = function() {
        console.log(this);
        console.log(`My favorite food is ${this.favFood}`);
    }
}
// capitalized first word indicates this will be used to construct objects
// with constructor style invocation


// CLOSURES AND CALLBACKS
// Callbacks:
function takesCallback(callback) {
    callback();
}

function thisIsACallback() {
    console.log('Sup');
}

takesCallback(thisIsACallback); // callbacks are passed UNINVOKED


// Closures:
// when a function uses variables defined in a higher scope (as fxs can be defined in other fxs)
// 'closing over' those variables from the higher scope

function dinerBreakfast() {
    const foods = ["cheesy scrambled eggs"];
    return (newFood) => {
        if (newFood) {
            foods.push(`and ${newFood}`);
            return `I'd like ${foods.join(" ")} please.`;
        }
        return `I'd like ${foods} please.`;
    };
}