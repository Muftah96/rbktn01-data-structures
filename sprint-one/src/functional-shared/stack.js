var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  


  var obj = {
  	objStorege : {},
  	// size : stackMethods.size,
  	// push : stackMethods.push,
  	// pop : stackMethods.pop
  }

  obj = _.extend(obj, stackMethods)
  return obj
};

var stackMethods = {

size : function () {
	
return Object.values(this.objStorege).length
},
push : function (value) {
	this.objStorege[value] = value;
},
pop : function () {
	var lastElem = this.objStorege[ Object.keys(this.objStorege)[Object.keys(this.objStorege).length - 1] ]
  	delete this.objStorege[ Object.keys(this.objStorege)[Object.keys(this.objStorege).length - 1] ]
 	return lastElem
}

};


