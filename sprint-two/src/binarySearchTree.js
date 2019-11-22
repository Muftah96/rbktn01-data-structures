
var BinarySearchTree = function() {
  var BSTree = {};
  BSTree.mid = null;

  BSTree.insert = function(value) {
    bsts.push(value)
    if (this.mid) {
      this.mid = BSTBuilder(new Node())
    }else {
      var node = new Node(value)
      this.mid = node
          }
  };

  BSTree.depthFirstLog = function() {
    var oldHead = this.head
    this.head = this.head.next
    return oldHead.value
  };

  BSTree.contains = function(target) {

    function check(node){
      if(target == node.value) return true
      else if (node.next == null) return false
      return check(node.next)
    }
    return check(this.head)
  };

  return BSTree;
};

var Node = function(value) {
  var node = {};

  node.value = value || null;
  node.right = null;
  node.left = null;


  return node;
}

var	BSTBuilder = function(node,end,start){
	if(bsts.length == 0) return
	var start = start || 0
	var end = end || bsts.length - 1
	var mid = end == start? end:Math.floor((end + start) / 2);
	console.log(end , start)
	if(end != start){
	if (mid < end)
	node.right = BSTBuilder (new Node(), end , mid + 1 )
	if (mid > start)
	node.left =BSTBuilder (new Node() , mid - 1 ,start)
	} 
	
	return new Node(bsts[mid])
	}
// var BinarySearchTree = function(value) {
// var newBST = {};
//  newBST.value = value;
//  newBST.left = null
//  newBST.right = null


// return newBST
// };

var bsts = []

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
