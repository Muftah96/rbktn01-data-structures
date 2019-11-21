var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    if (this.head && this.tail && this.head !== this.tail) {
      var node = new Node(value)
      this.tail.next = node
      this.tail = node
    }else if (this.head) {
      var node = new Node(value)
      this.head.next = node
      this.tail = node
    }else {
      var node = new Node(value)
      this.head = node
      this.tail = node
    }
  };

  list.removeHead = function() {
    var oldHead = this.head
    this.head = this.head.next
    return oldHead.value
  };

  list.contains = function(target) {

    function check(node){
      if(target == node.value) return true
      else if (node.next == null) return false
      return check(node.next)
    }
    return check(this.head)
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
