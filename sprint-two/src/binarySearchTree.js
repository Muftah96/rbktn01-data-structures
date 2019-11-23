
var BinarySearchTree = function(value) {
  var BSTree = {
  	right:null,
  	left:null,
  	value:value
  };
  BSTree.insert = function(value) {
  		if(value > this.value){
  			if(this.right){
  				this.right.insert(value)
  			}else{
  			this.right = new BinarySearchTree(value)

  			}
  		}else if(value < this.value){
  			if(this.left){
  				this.left.insert(value)

  			}else{
  		 this.left = new BinarySearchTree(value)

  			}
  }
  };
  BSTree.contains = function(target) {
  	console.log(target)
  	if (target === this.value) return true
  	if(target > this.value){
  			if(this.right){
  				if (this.right.value === target) return true
  				return this.right.contains(target)
  			}else{
  			return false 

  			}
  		}else if(target < this.value){
  			if(this.left){
  				if (this.left.value === target) return true
  				return this.left.contains(target)
  			}else{
  			return false 

  			}
  }
  };
    BSTree.depthFirstLog = function(func) {
 	func(this.value)
 	if(this.left) this.left.depthFirstLog(func)
   	if(this.right) this.right.depthFirstLog(func)

  };

  return BSTree;
};
 
   
  // var check = true
  // bsts.forEach(one => {
  // 	if (one.value === value){
  // 		check = false;
  // 		return
  // 	}
  // })
  // if(check){
  // 	if(this.mid) BSTBuilder(this.mid, value)
  // 	else this.mid = BSTBuilder(this.mid, value)
  // 	console.log(this.mid, bsts)
  // }
 

  //   // bsts.push(new Node(value))
  //   // bsts.sort()
 
  //   // BSTBuilder()
  //   // for (var i = 1; i < bsts.length; i += 2) {
  //   // 	console.log(bsts[i])
  //   // 	bsts[i].left = bsts[i - 1]
  //   // 	bsts[i].right = bsts[i + 1]
  //   // }
  //   // if (this.mid) {
  //   //   this.mid = BSTBuilder(new Node())
  //   // }else {
  //   //   var node = new Node(value)
  //   //   this.mid = node
  //   //       }
  





// var Node = function(value) {
//   var node = {};

//   node.value = value || null;
//   node.right = null;
//   node.left = null;


//   return node;
// }

// var	BSTBuilder = function(node,value){
// 	if(node){
// 		// console.log(node)
// if(value > node.value){
// 		if(node.right) BSTBuilder(node.right,value)
// 		else{
// 		var r = new Node(value)	
// 		bsts.push(r)
// 		node.right = r
// 		} 
// 	}else if(value < node.value){
// 		if(node.left) BSTBuilder(node.left,value)
// 		else{
// 		var r = new Node(value)
// 		bsts.push(r)
// 		node.left = r
// 		} 
// 	}
// // console.log(node,value)
// 	}else{
// 	var r = new Node(value)
// 	bsts.push(r)
// 	return r
	

// 	} 

// 	}
	// var swab = function (node, value) {



	// }

// var	Restructuring = function(end,start){
// 	if(bsts.length == 0) return
// 	var start = start || 0
// 	var end = end || bsts.length - 1
// 	var mid = end == start? end:Math.floor((end + start) / 2);
// 	var node = bsts[mid]
// 	console.log(end , start,mid)
// 	if(end != start){
// 	if (mid < end)
// 	node.right = Restructuring (end , mid + 1 )
// 	if (mid > start)
// 	node.left = Restructuring (mid - 1 ,start)
// 	} 
	
// 	return node
// 	}
// var BinarySearchTree = function(value) {
// var newBST = {};
//  newBST.value = value;
//  newBST.left = null
//  newBST.right = null


// return newBST
// };

// var bsts = []

// var bstMethods = {
// 	insert : function (value) {
//      bsts.push(value)
//      bsts = bsts.sort()
// }

// };

// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.right = null;
//   node.left = null;

//   return node;
// };

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




		// search : function (array , expNum, end , start, index) {
		// 	var start = start || 0
		// 	var end = end || array.length - 1
		// 	// console.log(end , start)
		// 	var mid = end == start? end:Math.floor((end + start) / 2);
		// 	if (expNum === array[mid] || end == start) {

		// 		if(expNum === array[mid]) return mid
		// 		else return -1
		// 	}else if (expNum > array[mid]) {
		// 	return	this.search (array ,expNum, end , mid + 1 )
		// 	}else if (expNum < array[mid]) {
		// 	return	this.search (array , expNum, mid - 1 ,start)
		// 	}
