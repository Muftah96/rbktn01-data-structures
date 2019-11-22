var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index,key) {
    checkLimit(index);
    var val;
    storage[index].forEach(one =>{
     if(one) if(one[0] == key)  val = one[1]
    })
    return val;
  };
  limitedArray.set = function(index, key,value) {
    checkLimit(index);
    if( !storage[index] )  storage[index] = []
    storage[index].push([key,value]);
  };
  limitedArray.each = function(callback) {
    storage.forEach(function(one,i){
      callback(one, i, storage);
    })
  };
   limitedArray.remove = function(index, key) {
    for (var i = 0; i < storage[index].length; i++) {
  if(storage[index][i][0] == key)  storage[index][i] = undefined
  }};

  var checkLimit = function(index) {
    if(index){
if (typeof index !== 'number') {
      throw new Error('index should be a number dude');
    }
    if (limit <= index) {
      limit *= 2
    }
    }
    
  };

  return limitedArray;
};

var getIndexBelowMaxForKey = function(key, limit) {
  var hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return  hash % limit;
};


