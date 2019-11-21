var BinarySearchTree = function(value) {

	var obj = {
		storage : [this.value],
		contains : function(){},
		insert : function () {
			// body...

		},
		depthFirstLog : function () {
			// body...
		},
		right : this.value,
		left : this.value,
		// search : function (array , expNum) {
		// 	var start =  0
		// 	var end = array.length - 1
		// 	var mid = end == start? end:Math.floor((end - start) / 2);
		// 	if (expNum === array[mid]) {
		// 		return array[mid]
		// 	}else if (expNum > array[mid]) {
		// 	return	this.search (array.slice(mid + 1) ,expNum)
		// 	}else if (expNum < array[mid]) {
		// 	return	this.search (array.slice(0, mid) , expNum)
		// 	}

		// }
		search : function (array , expNum, end , start, index) {
			var start = start || 0
			var end = end || array.length - 1
			// console.log(end , start)
			var mid = end == start? end:Math.floor((end + start) / 2);
			if (expNum === array[mid] || end == start) {

				if(expNum === array[mid]) return mid
				else return -1
			}else if (expNum > array[mid]) {
			return	this.search (array ,expNum, end , mid + 1 )
			}else if (expNum < array[mid]) {
			return	this.search (array , expNum, mid - 1 ,start)
			}

		}

	}
	return obj;
};

var obj = new BinarySearchTree(5)
// console.log (obj.search())

console.log (obj.search([0,1,4, 6,8], 6))
console.log('blabla')

/*
 * Complexity: What is the time complexity of the above functions?
 */

	// search : function (array , expNum, end , start ) {
	// 		var start = start || 0
	// 		var end = end || array.length - 1
	// 		// console.log(end , start)
	// 		var mid = end == start? end:Math.floor((end - start) / 2);
	// 		if (expNum === array[mid]) {
	// 			return mid
	// 		}else if (expNum > array[mid]) {
	// 		return	this.search (array ,expNum, end , mid + 1 )
	// 		}else if (expNum < array[mid]) {
	// 		return	this.search (array , expNum, mid - 1 ,start)
	// 		}

	// 	}