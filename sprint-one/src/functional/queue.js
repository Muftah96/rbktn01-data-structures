var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[value] = value
  };

  someInstance.dequeue = function() {
      var lastElem = storage[ Object.keys(storage)[0] ]
  delete storage[ Object.keys(storage)[0] ]
  return lastElem
  };

  someInstance.size = function() {
    return Object.values(storage).length
  };

  return someInstance;
};
