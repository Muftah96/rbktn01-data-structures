var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	var storage = this._storage
if (!storage[item]) storage[item] = item
};

setPrototype.contains = function(item){
	return this._storage[item]?true:false
}

setPrototype.remove = function(item) {
if (this._storage[item]) delete this._storage[item]
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
