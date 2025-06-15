# pp-random

[Try online](https://pp-random.netlify.app)

## Getting Started

In the web project include pp-random with:

```html
<script src="https://cdn.jsdelivr.net/npm/pp-random@latest/pp-random.min.js" ></script>
```

Or

## Install

```console
npm i pp-random --save
```

## How to use ?

```javascript
// length of random string
const len = 30
// Default options
const opt = { 
	number  : true ,
   letter  : true ,
	symbols : true ,
   exclude : []
}
const test1 = random(20).get()
const test1 = random( len , opt ).get()
const test2 = random(50,{	
	exclude:["@",">","*"]
}).get()

console.log(test);
console.log(test1);
console.log(test2);
```
