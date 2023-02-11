/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head) {
      newNode.next = this.head;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.tail) {
      throw new Error("List is empty!");
    }
    let delNode;
    if (this.length === 1) {
      delNode = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return delNode.val;
    }
    let currentNode = this.head;
    while (currentNode) {
      if ((currentNode.next = this.tail)) {
        delNode = currentNode.next;
        this.tail = currentNode;
        this.length -= 1;
        return delNode.val;
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw new Error("List is empty!");
    }
    let head = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = head.next;
    }
    this.length -= 1;
    return head.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length <= idx) {
      throw new Error(`Invalid index: ${idx}`);
    }
    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.length <= idx) {
      throw new Error(`Invalid index: ${idx}`);
    }
    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (this.length <= idx - 1) {
      throw new Error(`Invalid index: ${idx}`);
    } else if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let currentNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length += 1;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      this.shift();
    } else if (idx === this.length - 1) {
      this.pop(val);
    } else {
      let currentNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next;
      this.length -= 1;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0;
    } else {
      let currentNode = this.head;
      let sum = 0;
      let count = 0;
      while (currentNode) {
        sum += currentNode.val;
        count++;
        currentNode = currentNode.next;
      }
      return sum / count;
    }
  }
}

module.exports = LinkedList;
