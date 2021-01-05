// madLib
// Write a function that takes three strings
// - a verb, an adjective, and a noun
// - uppercases and interpolates them into the sentence
// "We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.

// For example,

// > madLib('make', 'best', 'guac');
// "We shall MAKE the BEST GUAC."

// function madLib(verb, adj, noun) {
//     console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()}
//     ${noun.toUpperCase()}.`);
// }

// madLib('make', 'best', 'guac');

// function isSubstring(searchString, subString){
//     return searchString.split(" ").includes(subString)
// }

function fizzBuzz(array){
    let newArray = [];
    array.forEach(ele => {
        if((ele % 3 === 0 && ele % 5 !== 0) || (ele % 3 !== 0 && ele % 5 === 0)){
            newArray.push(ele);
        }
    });
    return newArray
}