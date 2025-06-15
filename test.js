import random from './dist/pp-random.js'

const test = random(20).get()

// length of random string
const len = 30
// Default options
const opt = { 
	number    : true ,
    upperCase : true ,
    lowerCase : true ,
	symbols   : true ,
    exclude   : []
}

const test1 = random( len , opt ).get()

const test2 = random(50,{	
	exclude:["@",">","*"]
}).get()

console.log(test)
console.log(test1)
console.log(test2)