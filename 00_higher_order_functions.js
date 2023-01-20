// *********************Access this here ***********************************
// http://csbin.io/callbacks
//**************************************************************************



// Challenge 1
function addTwo(num) {
	return num+2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return addS+"s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

function multiplyByTwo(num) {
  return num * 2;
}
// Challenge 3
function map(array, callback) {
	for(let i = 0; i < array.length; i++) {
      array[i] = callback(array[i]);
    }
  return array;
}	

console.log(map([1, 2, 3], multiplyByTwo));

// Done


// Challenge 4
function forEach(array, callback) {
	for(let i=0; i < array.length; i++)
  {
    array[i] = callback(array[i]);
  }
}

var array = [1,2,3,4]
forEach(array, num=>num-1)
console.log(array)
// see for yourself if your forEach works! DONE


// Challenge 5
function mapWith(array, callback) {
	forEach(array, callback);
  return array
}

console.log(mapWith([1,2,3], num=>num**2))
// Challenge 6

function prod(a, b) {
  return a*b;
}

function reduce(array, callback, initialValue) {
	for(let i = 0; i < array.length; i++)
    {
      // console.log("init val = ", initialValue)
			initialValue = callback(initialValue, array[i]);
    }
  return initialValue;
}

console.log(reduce([2,4,6], prod, 1))


// Challenge 7

function findIntersection(init, arr)
{
  let eArr = []
  if (init.length === 0)
  {
      init = arr;
  }
  else
    {
      for (let i =0; i < init.length; i++)
      {
        let el = init[i];
        for (let j = 0; j < arr.length; j++)
          {
            if (arr[j] === el)
              {
                eArr.push(el);
              }
          }
      }
      
      init = eArr
  
    }
  return init;
}




function intersection(arrays) {
	return reduce(arrays, findIntersection, [])
}

console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]
// Challenge 8



function findUnion(init, arr) {
  if (init.length === 0) init = arr;
	for(let i = 0; i<arr.length; i++)
  {
    let el = arr[i];
    let include = true;
    for (let j = 0; j < init.length; j++)
      {
        if (el === init[j])
        {
          include = false;
        }
      }
    if (include)
    {
      init.push(el);
		}
}
  return init
}

// console.log(findUnion([1,2,3,4,5,6], [90,78,33,4]))

function union(arrays) {
	return reduce(arrays, findUnion, [])
}

console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
function objOfMatches(array1, array2, callback) {
  let sol = {}
	for(let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      sol[array1[i]] = array2[i]
    }
  }
  return sol
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {
	let sol = {}
	for (let i = 0; i < arrVals.length; i++) {
    let valArr = []
    arrCallbacks.forEach(function(fun) {
      valArr.push(fun(arrVals[i]))
    })
    sol[arrVals[i]] = valArr
  }
  return sol
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {
	let sol = {}	
  let keyArr = Object.keys(obj)
  keyArr.forEach(function (k) {
    if(obj[k] === callback(k))
  		sol[k] = obj[k]
  })
  return sol
}

const cities = {
London: 'LONDON',
LA: 'Los Angeles',
Paris: 'PARIS',
};
console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {
	let tm = 0, fm = 0
  array.forEach(function(e) {
    if(callback(e)) tm++
    else fm++
  })
  
  if (tm > fm) return true
  else return false
}

// /*** Uncomment these to check your work! ***/
const isOddd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOddd)); // should log: true
console.log(majority([2, 3, 4, 5], isOddd)); // should log: false


// Challenge 13
function prioritize(array, callback) {
	let sol = [], temp = []
  array.forEach(function(e) {
    if(callback(e)) sol.push(e)
    else temp.push(e)
  })
  
  temp.forEach(function(e) {
    sol.push(e)
  })
  return sol
}

/*** Uncomment these to check your work! ***/
const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
// ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 14
function countBy(array, callback) {
	let sol = {}
  array.forEach(e => {
    if (isNaN(sol[callback(e)])){ 
      sol[callback(e)] = 1
    }
    else sol[callback(e)]++
  })
  return sol;
}

// /*** Uncomment these to check your work! ***/
console.log(countBy([1, 2, 3, 4, 5], function(num) {
if (num % 2 === 0) return 'even';
else return 'odd';
})); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {
	let sol = {}
  array.forEach(function(e) {
    if (isNaN(sol[callback(e)])) {
      sol[callback(e)] = []
    }
    sol[callback(e)].push(e);
  })
  
  return sol
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
function goodKeys(obj, callback) {
	let kArr = Object.keys(obj), sol = []
  kArr.forEach(e => {
    if(callback(obj[e])) sol.push(e);
  })
  return sol
}

// /*** Uncomment these to check your work! ***/
const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']


// Challenge 17
function commutative(funct1, funct2, value) {
	if (funct2(funct1(value)) === funct1(funct2(value))) return true
  else return false
}

// /*** Uncomment these to check your work! ***/
const multBy3 = n => n * 3;
const divBy4 = n => n / 4;
const subtract5 = n => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 18
function objFilter(obj, callback) {
	let kArr = Object.keys(obj), sol = {}
  kArr.forEach(e => {
    if (callback(e) === obj[e]) sol[e] = obj[e];
  })
	return sol
}

/*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = n => n / 2;
console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 19
function rating(arrOfFuncs, value) {
	// return percentage of functions which returned true
  let nfwt = 0
  arrOfFuncs.forEach(func => {
    if(func(value)) nfwt++
  })
	
  return (nfwt/arrOfFuncs.length) * 100
}

/*** Uncomment these to check your work! ***/
const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); // should log: 100
console.log(rating(checks, 66)); // should log: 75


// Challenge 20
function pipe(arrOfFuncs, value) {

  arrOfFuncs.forEach(func => {
    value = func(value);
  })
	return value;
}

// /*** Uncomment these to check your work! ***/
const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 21
function highestFunc(objOfFuncs, subject) {
	let kArr = Object.keys(objOfFuncs);
	let maxKey = kArr[0];
  
  for(let i = 1; i < kArr.length; i++) {
    if (objOfFuncs[kArr[i]](subject) > objOfFuncs[maxKey](subject)) {
      maxKey = kArr[i];
    }
  }
  return maxKey;
}

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


// Challenge 22
function combineOperations(startVal, arrOfFuncs) {

  arrOfFuncs.forEach( func => {
    startVal = func(startVal);
  })
  
  return startVal;
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num*5;
}

function addTen(num) {
  return num + 10;
}
// /*** Uncomment these to check your work! ***/
console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10


// Challenge 23
function myFunc(array, callback) {
	
  for(let i = 0; i < array.length; i++) {
    if (callback(array[i])) return i;
  }
  return -1;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return (num % 2 !== 0);
}

/*** Uncomment these to check your work! ***/
console.log(myFunc(numbers, isOdd)); // Output should be 1
console.log(myFunc(evens, isOdd)); // Output should be -1


// Challenge 24
function myForEach(array, callback) {
	for(let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

/*** Uncomment these to check your work! ***/
const nums = [1, 2, 3];
myForEach(nums, addToSum);
console.log(sum); // Should output 6
