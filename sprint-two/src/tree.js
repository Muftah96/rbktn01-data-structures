var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree = _.extend(newTree, treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(new Tree(value))
};

treeMethods.contains = function(target) {

    function check(tree){
    var pass = false
      if(target == tree.value) return true
      else if (tree.children.length == 0) return false
      tree.children.forEach(function(one){
      if(!pass) pass = check(one)
})
  return pass
    }
    return check(this)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
