# listorange

  **listorange** is a non-blocking function, that converts array of numbers in to compact range array or string description. For example: 
	
	[1,2,3,4,5,6,7,8] -> "1-8" || [[1,8]]
	[1,3,4,5,6,7,8] -> "1,3-8"
	[1,3,4,5,6,7,8,10,11,12] -> "1,3-8,10-12"
	[1,2,3] -> "1-3"
	[1,2] -> "1,2"
	[1,2,4] -> "1,2,4"
	[1,2,4,5,6] -> "1,2,4-6" || [[1,2],[4,6]]
	[1,2,3,7,8,9,15,17,19,20,21] -> "1-3,7-9,15,17,19-21"
	[1,2,3,4,5,6,100,1091,1999,2000,2001,2002] -> "1-6,100,1091,1999-2002" || [[1,6],[100],[1091],[1999,2002]]
	[1] -> "1"
	[1,3,5,7,9,11] -> "1,3,5,7,9,11"
	[5,6,19,5,5,3,16,4,19,17] -> [[3,6],[16,17],[19]]

## Install 
	
	npm install listorange --save
	
## Usage

	 
####Declaration

	listorange(array, getString, sort, step);
	
#### Arguments
**array** (Array): List array of numbers.<br/>
**getString** (Boolean): Return result as string range. Default is `true`.<br/>
**sort** (Boolean): Sort array before parsing. Default is `false`. Uses non-blocking quicksort module **qqsort**.<br/>
**step** (Number): Max iterate count to separate iteration tasks to *nextTick*. Usefull for non-blocking. Optimal and default value is `10000`.

#### Returns
(Promise): Returns promise. Callback in `.then` receives `(result)` as argument. The **result** can be a string or an array depending on **getString** argument passed to listorange function.

## Examples
	
	const listorange = require('listorange');
	
	listorange([1,2,3,4,5,6,7,8]).then(str=>{
		console.log(str);
	});
	// result: "1-8"
	
	listorange([1,2,3,4,5,6,7,8], false).then(str=>{
		console.log(str);
	});
	// result: [[1,8]]
	
	listorange([5,6,19,5,5,3,16,4,19,17], true, true).then(str=>{
		console.log(str);
	});
	// result: "3-6,16,17,19"
	
	listorange([5,6,19,5,5,3,16,4,19,17], true, true).then(str=>{
		console.log(str);
	});
	// result: [[3,6],[16,17],[19]]

## Tests

	npm test

## License

[MIT](https://raw.githubusercontent.com/mochajs/mocha/master/LICENSE)
