Dog.prototype = Object.create(Animal.prototype);

//Object.create returns an entirely new object with its __proto__ set to whatever arg is passed to Object.create. We set the object returned by Object.create to be the prototyps of the child constructor function.

function Animal (name) {
    this.name = name;
}

Animal.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
}

function Dog (name, coatColor) {
    // call super-constructor function on the current 'dog' instance
    Animal.call(this, name); // runs Animal initialization logic on the current Dog instance.
    //Dog-specific intialization
    this.coatColor = coatColor;
};

Dog.prototype = Object.create(Animal.prototype); //Dog now inherits from Animal
Dog.prototype.constructor = Dog 

Dog.prototype.bark = function () {
    console.log("Bark!");
};

const liesel = new Dog("Liesel");

liesel.bark();
liesel.sayHello();

//Old Surrogate way

function Surrogate () {};
Surrogate.prototype = Animal.prototype;

Dog.prototype = new Surrogate();

Dog.prototype.constructor = Dog;

const liesel = new Dog("Liesel", "Black");

liesel.sayHello();

//instead of using Object.create to make a new prototype object, this method uses a third class traditionally called the Surrogate.
//Surrogate.prototype is set equal to Animal.prototype so all instances of Surrogate will have a __proto__ accessor that points to Animal.prototype. This surrogate instance becomes the new Dog.prototype.

//ES2015 simplifies JavaScript inheritance. class Dog extends Animal is the syntactic-sugar equivalent of using Object.create. One can access a parent class's overwritten functions using super. Within a child class's constructor function, simply call super with the necessary parameters for the base class's constructor. Less commonly, one can invoke the base-class version of an overwritten (non-constructor) function using super.methodName().

// Note the use of extends and super below.
class Bicycle {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }

    action() {
        return "rolls along";
    }
}

class RaceBicycle extends Bicycle {
    constructor(color, model, gears) {
        super(color, model);
        this.gears = gears;
    }

    action() {
        const oldAction = super.action();
        return `${oldAction} at a blistering pace!`
    }
}


//Modules in the Browser
// When writing for Node, we used module.exports and require to break out code into modules, but web browsers do not have this functionality. Later, we'll use a tool to help us out with that, but first it's necessary to understand how modules work in the browser natively.

// Requiring Files
// If we write front-end JavaScript in multiple files, we could explicitly list each of them in our HTML document. Since browsers execute HTML from the top down, each JavaScript file will be loaded in the order it is listed. When dpendencies are involved, this ordering is importnatn: If lion.js requires animal.js to be loaded first, then the HTML document must list animal.js before lion.js.

<body>
    ...

    <script src="zoo/animal.js"></script>
    <script src="zoo/lion.js"></script>
    <script src="app.js"></script>

</body>

//Unlike Node, where each file has its own global namespace, in the borswer a single global namespace (called window) is shared across all JavaScript files. If animal.js loads before lion.js, and animal.js sets window.Animal, then when lion.js executes, it can use window.Animal. Since there is no require in browser JS, this is one way front end JS libraries can make their code available to other libraries-- by setting global variables.
//This is much more like Ruby than Node in that there is a shared global namspace across all the source files. However, unlike Ruby, the browser doesn't have a require function, so you cannot specificy dependencies inside the file that requires them. You must keep track of these yourself and ensure that your scripts are ll loaded in the correct order.
// If the libraries are loaded in the wrong order then everything breaks in confusing, unpredictable ways. You can imagine that this quickly becomes unmaintainable and difficult to debug. What is an enterprising new front-end developer to do?

//Module Bundlers
//There are wonderful tools that exist for the purpose of 'bundling' your front-end code into digestible, bite-sized bits build for the browser. These tools will run through all your source files and bundle them into a single file you can include in your html with one script tag. Each file requires its dependencies explicitly at the top, and then exports the object it is responsible for making. It does this via an Abstract Syntax Treee to make sure that all of the libraries that require each other are loaded in the right order.

//Importing and Exporting
//Here's a typical approach to writing source files intedned for execution by the browser.

//./zoo/animal.js:

// ./zoo/animal.js
//Define an Animal class; export it as 'Animal'. Save it
class Animal {
    eat() {
        // ... 
    }
}

module.exports = Animal;

//.zoo/lion.js:
const Animal = require('./animal.js');
//Inherit Lion from Animal
class Lion extends Animal {
    roar() {
        //...
    }
};

module.exports = Lion;

//./app.js:

const Lion = require('./zoo/lion');
for (let i = 0; i < 10; i++) {
    console.log(new Lion().roar());
}

//We don't have to worry about loading these scripts in the right order because our module bundler will make sure to load any file declared in require before the rest of the code after that will depend on it.

//Furthermore, by only exporting the objects we want, we protect the global namespace from pollution and name collisionbs. This allows us to mix in libraries with less fear and makes our code safe for other programmers to include.

//Webpack

//If all of your source files require their dependencies and use module.exports to set their exports, then you are ready to use a module bundler to prepare your program for the browser.
//First we need to get a module bundler. There are a few options, but we will use Webpack during the course. (after installing)

// navigate to your app directory and run webpack app.js -o bundle.js --mode=development. Webpack will find the file named app.js in the current directory and bundle it up with any files it requires, and any files those files require, until it has all the dependencies it needs. It will output this to a file called bundle.js. The mode flag tells Webpack to optimize this build for development, rather than production.

//Your html file would then have a script tag for the bundled file like: <script src="bundle.js"></script>.

//What is Canvas?
// 2-D drawing API 
// Four ways to draw things on the web: Canvas, SVG, CSSm and direct DOM animation.
//SVG: a vector API that draws shapes. Each shape has an object that you can attach event handlers to. If you zoom in the shape stays smooth, whereas Canvas would become pixelated.
//CSS: styles DOM elements. Since there are no DOM elements for things you draw in Canvas you can't use CSS to style it. CSS will only affect the rectangular area of the Canvas itself, so you can set a border and background color, but that's it.
//DOM animation: The DOM, or DOcument Object Model, defines an object for everything on the screen. DOM animation, either by using CSS of JavaScript to move objects around, can be smoother in some cases than doing it with Canvas, but it depends on your browser implementation.