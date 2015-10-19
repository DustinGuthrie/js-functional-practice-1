

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,

 * 2. Array.forEach,
 //Here are some tips learned from class review:
 //args.forEach(function (currItem, idx, arr) {}
 //or forEach(args, function(currItem, idx, arr)) {}

 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback
var sum = 0
function forEach(array, callback){
    // YOUR CODE HERE
        for (var i = 0; i < array.length; i++)
          sum += 1;
          callback(array);
        }
    var number = function(array) {
      console.log("The callback was executed");
    }
    forEach([2,2], number);
    console.assert(sum === 2);



// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))
function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var total = 0;
    for (var i in args) {
      total += args[i];
    }
      return total;
    }
}
sum (1,2,3,4,5);
  console.assert( sum(1, 2, 3, 4, 5) === 15 );

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var total = 0;
    for (var i in args) {
      total += args[i];
    }
    return total / (args.length);
    // .. do something with each element of args
    // YOUR CODE HERE
}
average(2, 4, 6, 8);
console.assert( average(2, 4, 6, 8) === 5 );

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var max = 0;
    for (var i in args) {
      if (args[i] > max) {
        max = i;
    }
  }
    return max;
}
largest(2,4,6,8);
console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var length = 0
    var longest;
    for (var i in args) {
      if (args[i].length > length) {
        length = args[i].length;
        longest = args[i];
      }
    }
    return longest;
}
longest("this", "is", "a", "awesome", "function");
 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
//This will sort the items alphabetically
var names = ["steve", "Barry", "kristi", "Norma"]
names.sort();
console.assert(names === "Barry", "krista", "Norma", "Steve")

// .concat()
//This will combine arrays adding to the end of the first one called
var redCrayons = ["maroon", "fire"];
var yellowCrayons = ["lightbulb", "schoolbus"];
var newCrayonColor = redCrayons.concat(yellowCrayons);
console.log(newCrayonColor);
console.assert(newCrayonColor === "maroon", "fire", "lightbulb", "schoolbus")

// .indexOf()
//This will allow you to find the particular index of a value in an array
var numbers = [1,3,5,7,9];
var x = numbers.indexOf(3);
console.assert(x === 1)

// .split()
//This will split the array into seperate values based off of a parameter (ie "")
var myName = "Dustin"
var x = myName.split("");
console.assert( x === d,u,s,t,i,n)

// .join()
//This will join the elements of an array into 1 value with a particular character (ie "-")
var toppings = ["pepperonoi", "cheese", "onions", "bacon"];
console.log(toppings.join ("-"));
console.assert(toppings.join ("-") === "pepperonoi-chese-onions-bacon")

// .pop()
//Takes a value off of the last value of the array
var toppings = ["pepperonoi", "cheese", "onions", "bacon"];
var newToppings = toppings.pop ();
console.log(newToppings);
console.assert(newToppings === "bacon")

// .push()
//Adds values to the end of an existing array
var toppings = ["pepperonoi", "cheese", "onions", "bacon"];
var newToppings = toppings.push ("olives", "tomato");
console.log(toppings);
console.assert(newToppings === 6)

// .slice()
//Removes a specified value from a specific point to another in array (ex [0,2])
var fruits = ["apple", "pear", "orange", "banana"];
console.log(fruits.slice (2,3));
console.assert( fruits.slice (2,3)) === "orange")

// .splice()
//We can remove a specified value and insert another in its place
//EX 4 = start value to remove, 1 = how many to remove, "Hello" = what to insert in its place
var sentence = ["This", "is", "an", "array", "of", "sorts"];
var removed = sentence.splice(4,1, "hello");
console.log(sentence);
console.assert(sentence === "This", "is", "an", "array", "of", "hello")

// .shift()
//removes first value from the array
var fruits = [ "pineapple", "banana", "strawberry", "pear"];
var oneFruit = fruits.shift( );
console.log(oneFruit);
console.assert(oneFruit === "pineapple")

// .unshift()
//adds values to the beginning of the arrayLß
var fruits = [ "pineapple", "banana" ];
var newLength = fruits.unshift ( "strawberry", "pear" );
console.log(fruits);
console.log(newLength);
console.assert( newLength === 4)

// .filter()
//ummm I see some examples but cant think of one to write without copying.
//Looks like you can filter the return values of a function - need more explanation

// .map()
//i got this from MDN and in theory seems to make sense but i wouldn't know
//how to use it in practice
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
console.assert( doubles === 2, 8, 18)
