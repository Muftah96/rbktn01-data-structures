class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {}
  }

}

Queue.prototype.size = function(){
  	return Object.values(this.storage).length
  }
  Queue.prototype.enqueue = function(value) {
  	this.storage[value] = value
  }
  Queue.prototype.dequeue = function () {
		var lastElem = this.storage[ Object.keys(this.storage)[0] ]
  delete this.storage[ Object.keys(this.storage)[0] ]
  return lastElem
	}