var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
  };

  // Implement the methods below
  someInstance.push = function(value) {
   storage[value] = value;
  };

  someInstance.pop = function() {
    var lastElem = storage[ Object.keys(storage)[Object.keys(storage).length - 1] ]
  delete storage[ Object.keys(storage)[Object.keys(storage).length - 1] ]
  return lastElem
  };

  someInstance.size = function() {
     return Object.values(storage).length
  };

  return someInstance;
};
