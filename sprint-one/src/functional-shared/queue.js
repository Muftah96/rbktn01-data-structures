var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {

  	objStorage : {}

  }
  obj = _.extend(obj, queueMethods)
  return obj
};

var queueMethods = {
	size : function () {
		return Object.values(this.objStorage).length
	},
	enqueue : function (value) {
		this.objStorage[value] = value
	},
	dequeue : function () {
		var lastElem = this.objStorage[ Object.keys(this.objStorage)[0] ]
  delete this.objStorage[ Object.keys(this.objStorage)[0] ]
  return lastElem
	}
};


