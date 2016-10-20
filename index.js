/**
 * list to range
 * non-blocking, efficient
 *
 * Copyright (c) 2016 Firanolfind
 * MIT License
 *
 * 2016-10-19
 */
'use strict';
/*..................................*/

const qqsort = require('qqsort');
const setImmediate = global.setImmediate || process.nextTick;

module.exports = function(arr, get_string=true, sort=false, step=10000){
	
	var result_arr = [];
	var result_str = "";
	var start = null;
	var i = 0;
	const length = arr.length;

	var iterate = ()=> new Promise((resolve, reject)=>{
		let k = 0;
		setImmediate(()=>{
			while(i < arr.length && !i < 0 || arr[i]+1 === arr[i+1] || arr[i] === arr[i+1]){
				i++;
				if(k >= step){
					return resolve();
				}
				k++;
			}
			reject();
		});
	});

	var find_range = ()=> new Promise((resolve, reject)=>{

		setImmediate(()=>{

			if(i >= length){
				reject();
			}else{
				if(i && get_string)
					result_str += ',';
				start = arr[i];
				let j = i;
				var iterate_range = ()=> iterate()
					.then(iterate_range)
					.catch(()=>{
						let o = [start];
						if(get_string)
							result_str += '' + start;
						if(i > j){
							if(get_string && start !== arr[i])
								result_str += (arr[i] - start > 1 ? '-' : ',') + arr[i];
							else if(start !== arr[i])
								o.push(arr[i]);
						}

						if(!get_string)
							result_arr.push(o);
						i++;
						resolve();
					});
				iterate_range();
			}
		});
	});

	return new Promise(function(resolve, reject){

		setImmediate(()=>{

			var start = err => {
				if(err){
					reject(err);
				}else{
					try{
						var iterate_range = ()=> find_range()
								.then(iterate_range)
								.catch(()=> resolve( get_string ? result_str : result_arr ));
						
						iterate_range();
					}catch(e){
						reject(e);
					}
				}
			}

			if(sort)
				qqsort(arr, start);
			else
				start();
		});
		
	});

}