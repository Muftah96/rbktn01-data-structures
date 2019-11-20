var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var newStackMethods = Object.create(stackMethods)
newStackMethods.objStorage = {}
  return newStackMethods

};

var stackMethods = {

size : function () {
	
return Object.values(this.objStorage).length
},
push : function (value) {
	this.objStorage[value] = value;
},
pop : function () {
	var lastElem = this.objStorage[ Object.keys(this.objStorage)[Object.keys(this.objStorage).length - 1] ]
  	delete this.objStorage[ Object.keys(this.objStorage)[Object.keys(this.objStorage).length - 1] ]
 	return lastElem
}

};


