

// Instantiate a new graph
var Graph = function() {
	this.storage = {
	nodes : {},
	edges : []
}

};

// var Edge = function (Node1, Node2) {
// 	// body...
// var edge = {
// 	[Node1]: Node1,
// 	[Node2]: Node2
// }
// return edge
// }



// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
this.storage.nodes[node] = node

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return this.storage.nodes[node] ? true : false 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
delete this.storage.nodes[node]
var edges = this.storage.edges
	edges.forEach(function(one, i){
  if(one.includes(node)){
  	
  	edges.splice(i,1)
  	return
  }
})
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
var pass = false
fromNode = new RegExp(fromNode);
toNode = new RegExp(toNode);
this.storage.edges.forEach(function(one){
  if(fromNode.test(one) && toNode.test(one)){
  	pass = true
  	return
  }
})
return pass
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.storage.edges.push(`${fromNode} ${toNode}`)
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	var edges = this.storage.edges
	edges.forEach(function(one, i){
  if(one.includes(fromNode) && one.includes(toNode)){
  	
  	edges.splice(i,1)
  	return
  }
})
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (var key in this.storage.nodes) cb(key)
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


