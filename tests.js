
const assert = require('assert');
const describe = require('mocha').describe;
const it = require('mocha').it;
const rand = (min, max) => ~~(Math.random() * (max - min + 1)) + min;

describe("Module state", () => {
	describe("package.json", () => {
		it("valid package.json", done => {
			require("./package.json");
			done();
		});
	});

	describe("export", () => {
		it("exporting listorange", done => {
			require("./index.js");
			done();
		});
	});
});

describe("Functionality", () => {

	describe("Default converting", () => {
		describe('[1,2,3,4,5,6,7,8] -> "1-8"', () => {
			it("Converting sorted list to string without params", done => {
				
				var l2r = require("./index.js");

				l2r([1,2,3,4,5,6,7,8]).then(str=>{
					assert.equal(str, "1-8");
					done();

				}).catch(done);
			});
		});

		describe('[1,3,4,5,6,7,8] -> "1,3-8"', () => {
			it("Converting sorted list to string without params", done => {
				
				var l2r = require("./index.js");

				l2r([1,3,4,5,6,7,8]).then(str=>{
					assert.equal(str, "1,3-8");
					done();

				}).catch(done);
			});
		});

		describe('[1,3,4,5,6,7,8,10,11,12] -> "1,3-8,10-12"', () => {
			it("Converting sorted list to string without params", done => {
				
				var l2r = require("./index.js");

				l2r([1,3,4,5,6,7,8,10,11,12]).then(str=>{
					assert.equal(str, "1,3-8,10-12");
					done();

				}).catch(done);
			});
		});

		describe('[1,2,3] -> "1-3"', () => {
			it("Converting sorted list to string without params", done => {
				
				var l2r = require("./index.js");

				l2r([1,2,3]).then(str=>{
					assert.equal(str, "1-3");
					done();

				}).catch(done);
			});
		});

		describe('[1,2] -> "1,2"', () => {
			it("Converting sorted list to string without params", done => {
				
				var l2r = require("./index.js");

				l2r([1,2]).then(str=>{
					assert.equal(str, "1,2");
					done();

				}).catch(done);
			});
		});

		describe('[1,2,4] -> "1,2,4"', () => {
			it("Converting sorted list to string without params", done => {
				
				var l2r = require("./index.js");

				l2r([1,2,4]).then(str=>{
					assert.equal(str, "1,2,4");
					done();

				}).catch(done);
			});
		});

		describe('[1,2,4,5,6] -> "1,2,4-6"', () => {
			it("Converting sorted list to string without params", done => {
				
				var l2r = require("./index.js");

				l2r([1,2,4,5,6]).then(str=>{
					assert.equal(str, "1,2,4-6");
					done();

				}).catch(done);
			});
		});

		describe('[1,2,3,7,8,9,15,17,19,20,21] -> "1-3,7-9,15,17,19-21"', () => {
			it("Converting sorted list to string without params", done => {
				
				var l2r = require("./index.js");

				l2r([1,2,3,7,8,9,15,17,19,20,21]).then(str=>{
					assert.equal(str, "1-3,7-9,15,17,19-21");
					done();

				}).catch(done);
			});
		});

		describe('[1,2,3,4,5,6,100,1091,1999,2000,2001,2002] -> "1-6,100,1091,1999-2002"', () => {
			it("Converting sorted list to string without params", done => {
				
				var l2r = require("./index.js");

				l2r([1,2,3,4,5,6,100,1091,1999,2000,2001,2002]).then(str=>{
					assert.equal(str, "1-6,100,1091,1999-2002");
					done();

				}).catch(done);
			});
		});

		describe('[1] -> "1"', () => {
			it("Converting sorted list to string without params", done => {
				
				var l2r = require("./index.js");

				l2r([1]).then(str=>{
					assert.equal(str, "1");
					done();

				}).catch(done);
			});
		});

		describe('[1,3,5,7,9,11] -> "1,3,5,7,9,11"', () => {
			it("Converting sorted list to string without params", done => {
				
				var l2r = require("./index.js");

				l2r([1,3,5,7,9,11]).then(str=>{
					assert.equal(str, "1,3,5,7,9,11");
					done();

				}).catch(done);
			});
		});
	});

	describe("Converting to array", () => {
		
		describe('[1,2,3,4,5,6,100,1091,1999,2000,2001,2002] -> [[1,6],[100],[1091],[1999,2002]]', () => {
			it("Converting sorted list to array", done => {
				
				var l2r = require("./index.js");

				l2r([1,2,3,4,5,6,100,1091,1999,2000,2001,2002], false).then(str=>{
					assert.deepEqual(str, [[1,6],[100],[1091],[1999,2002]]);
					done();

				}).catch(done)
			});
		});
		
		describe('[1] -> [[1]]', () => {
			it("Converting sorted list to array", done => {
				
				var l2r = require("./index.js");

				l2r([1], false).then(str=>{
					assert.deepEqual(str, [[1]]);
					done();

				}).catch(done)
			});
		});
		
		describe('[1,2,4,5,6] -> [[1,2],[4,6]]', () => {
			it("Converting sorted list to array", done => {
				
				var l2r = require("./index.js");

				l2r([1,2,4,5,6], false).then(str=>{
					assert.deepEqual(str, [[1,2],[4,6]]);
					done();

				}).catch(done)
			});
		});
	});

	describe("Sorting and Converting to string", () => {
		
		describe('[5,6,19,5,5,3,16,4,19,17] -> "3-6,16,17,19"', () => {
			it("Converting and sorting unsorted list to string", done => {
				
				var l2r = require("./index.js");

				l2r([5,6,19,5,5,3,16,4,19,17], true, true).then(str=>{
					assert.deepEqual(str, "3-6,16,17,19");
					done();
				}).catch(done)
			});
		});
		
		describe('[5,6,19,5,5,3,16,4,19,17] -> [[3,6],[16,17],[19]]', () => {
			it("Converting and sorting unsorted list to array", done => {
				
				var l2r = require("./index.js");

				l2r([5,6,19,5,5,3,16,4,19,17], false, true).then(str=>{
					assert.deepEqual(str, [[3,6],[16,17],[19]]);
					done();
				}).catch(done)
			});
		});
		
		describe('[7,35,7,2,11,7,7,35,31,32,7,7,7,8,13,11,33,18,1,3,2,14] -> "1-3,7,8,11,13,14,18,31-33,35"', () => {
			it("Converting and sorting unsorted list with dublicate items to array", done => {
				
				var l2r = require("./index.js");

				l2r([7,35,7,2,11,7,7,35,31,32,7,7,7,8,13,11,33,18,1,3,2,14], true, true).then(str=>{
					assert.deepEqual(str, "1-3,7,8,11,13,14,18,31-33,35");
					done();
				}).catch(done)
			});
		});
		
		describe('[7,35,7,2,11,7,7,35,31,32,7,7,7,8,13,11,33,18,1,3,2,14] -> [[1,3],[7,8],[11],[13,14],[18],[31,33],[35]]', () => {
			it("Converting and sorting unsorted list with dublicate items to array", done => {
				
				var l2r = require("./index.js");

				l2r([7,35,7,2,11,7,7,35,31,32,7,7,7,8,13,11,33,18,1,3,2,14], false, true).then(str=>{
					assert.deepEqual(str, [[1,3],[7,8],[11],[13,14],[18],[31,33],[35]]);
					done();
				}).catch(done)
			});
		});
		
		describe('[-7,-7,-7,-7,-7,1,1000000,1,4,8,7,6] -> "-7,1,4,6-8,1000000"', () => {
			it("Converting strange list with dublicate items to string", done => {
				
				var l2r = require("./index.js");

				l2r([-7,-7,-7,-7,-7,1,1000000,1,4,8,7,6], true, true).then(str=>{
					assert.deepEqual(str, "-7,1,4,6-8,1000000");
					done();
				}).catch(done)
			});
		});
		
		describe('[-7,-7,-7,-7,-7,1,1000000,1,4,8,7,6] -> [[-7],[1],[4],[6,8],[1000000]]', () => {
			it("Converting strange list with dublicate items to array", done => {
				
				var l2r = require("./index.js");

				l2r([-7,-7,-7,-7,-7,1,1000000,1,4,8,7,6], false, true).then(str=>{
					assert.deepEqual(str, [[-7],[1],[4],[6,8],[1000000]]);
					done();
				}).catch(done)
			});
		});
		
		describe('[] -> ""', () => {
			it("Converting empty list to string", done => {
				
				var l2r = require("./index.js");

				l2r([], true, true).then(str=>{
					assert.deepEqual(str, "");
					done();
				}).catch(done)
			});
		});
		
		describe('[] -> []', () => {
			it("Converting empty list to array", done => {
				
				var l2r = require("./index.js");

				l2r([], false, true).then(str=>{
					assert.deepEqual(str, []);
					done();
				}).catch(done)
			});
		});
	});
});

describe("Performance", () => {
	describe("Sorted values", () => {
		it("Converting 100k sorted values", done => {
			
			var l2r = require("./index.js");

			var arr = [];
			for(let i=0; i<100000; i++)
				arr.push(i);

			l2r(arr, true, false)
				.then(str=>done())
				.catch(done)
		});
	});
	describe("Random values", () => {
		it("Converting 100k random values", done => {
			
			var l2r = require("./index.js");

			var arr = [];
			for(let i=0; i<100000; i++)
				arr.push(rand(1, 100000));

			l2r(arr, true, true)
				.then(str=>done())
				.catch(done)
		});
	});
	describe("Non-blocking 100k sorted", function(){
		
		this.timeout(5000);

		it("Convert 100k sorted array and do not block event loop for over 20 ms", done => {
			
			var l2r = require("./index.js");

			var arr = [];
			for(let i=0; i<100000; i++)
				arr.push(i);

			var heartbeatDone = false;
			var lastTick = Date.now();
			var maxTick = 0;

			var heartbeatTimer = ()=>{
				var now = Date.now();
				if (now - lastTick > maxTick)
					maxTick = now - lastTick;
				lastTick = now;
				if (!heartbeatDone) setTimeout(heartbeatTimer, 2);
			}
			
			setTimeout(heartbeatTimer, 2)

			l2r(arr, true)
				.then(str=>{
					heartbeatDone = true;
					maxTick = Math.max(Date.now() - lastTick, maxTick);
					console.log("      blocked [%d] ms", maxTick);
					assert.ok(maxTick <= 20, "convert 100k event loop blocked " + maxTick + " ms");
					done();
				})
				.catch(done);
		});
	});

	describe("Non-blocking 100k random", function(){
		
		this.timeout(5000);

		it("Convert 100k random array and do not block event loop for over 20 ms", done => {
			
			var l2r = require("./index.js");

			var arr = [];
			for(let i=0; i<100000; i++)
				arr.push(rand(1, 100000));

			var heartbeatDone = false;
			var lastTick = Date.now();
			var maxTick = 0;

			var heartbeatTimer = ()=>{
				var now = Date.now();
				if (now - lastTick > maxTick)
					maxTick = now - lastTick;
				lastTick = now;
				if (!heartbeatDone) setTimeout(heartbeatTimer, 2);
			}
			
			setTimeout(heartbeatTimer, 2)

			l2r(arr, true, true)
				.then(str=>{
					heartbeatDone = true;
					maxTick = Math.max(Date.now() - lastTick, maxTick);
					console.log("      blocked [%d] ms", maxTick);
					assert.ok(maxTick <= 20, "convert 100k event loop blocked " + maxTick + " ms");
					done();
				})
				.catch(done);
		});
	});

	describe("Non-blocking 1m sorted", function(){
		
		this.timeout(5000);

		it("Convert 1m sorted array and do not block event loop for over 70 ms", done => {
			
			var l2r = require("./index.js");

			var arr = [];
			for(let i=0; i<1000000; i++)
				arr.push(i);

			var heartbeatDone = false;
			var lastTick = Date.now();
			var maxTick = 0;

			var heartbeatTimer = ()=>{
				var now = Date.now();
				if (now - lastTick > maxTick)
					maxTick = now - lastTick;
				lastTick = now;
				if (!heartbeatDone) setTimeout(heartbeatTimer, 2);
			}
			
			setTimeout(heartbeatTimer, 2)

			l2r(arr, true, false)
				.then(str=>{
					heartbeatDone = true;
					maxTick = Math.max(Date.now() - lastTick, maxTick);
					console.log("      blocked [%d] ms", maxTick);
					assert.ok(maxTick <= 70, "convert 1m event loop blocked " + maxTick + " ms");
					done();
				})
				.catch(done);
		});
	});

	describe("Non-blocking HUGE 1m random", function(){
		
		this.timeout(5000);

		it("Convert 1m random array and do not block event loop for over 70 ms", done => {
			
			var l2r = require("./index.js");

			var arr = [];
			for(let i=0; i<1000000; i++)
				arr.push(rand(1, 100000));

			var heartbeatDone = false;
			var lastTick = Date.now();
			var maxTick = 0;

			var heartbeatTimer = ()=>{
				var now = Date.now();
				if (now - lastTick > maxTick)
					maxTick = now - lastTick;
				lastTick = now;
				if (!heartbeatDone) setTimeout(heartbeatTimer, 2);
			}
			
			setTimeout(heartbeatTimer, 2)

			l2r(arr, true, true)
				.then(str=>{
					heartbeatDone = true;
					maxTick = Math.max(Date.now() - lastTick, maxTick);
					console.log("      blocked [%d] ms", maxTick);
					assert.ok(maxTick <= 70, "convert 1m event loop blocked " + maxTick + " ms");
					done();
				})
				.catch(done);
		});
	});
});