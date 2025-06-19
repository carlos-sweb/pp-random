# pp-random

[Try online](https://pp-random.netlify.app)

## Getting Started

In the web project include pp-random with:

```html
<script src="https://cdn.jsdelivr.net/npm/pp-random/dist/pp-random.min.js" ></script>
```

Or

## Install

```console
npm i pp-random --save
```

## How to use ?

```javascript
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
```
