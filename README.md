# pp-random

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

var letterOnly = ppRandom( 10 );
var letterAndNumber = ppRandom(10, true , true);
var numberOnly = ppRandom(10 , false , true );
var symbols = ppRandom(10, false, false, true);


```
[See Exmaple](https://pp-random.netlify.app)
