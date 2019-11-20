var Queue = function() {
	var newQueueMethods = Object.create(queueMethods)
	
	newQueueMethods.objStorage = {}
	return newQueueMethods

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.size = function () {
		return Object.values(this.objStorage).length
}
queueMethods.enqueue = function (value) {
		this.objStorage[value] = value
	}
 queueMethods.dequeue = function () {
		var lastElem = this.objStorage[ Object.keys(this.objStorage)[0] ]
  delete this.objStorage[ Object.keys(this.objStorage)[0] ]
  return lastElem
	}