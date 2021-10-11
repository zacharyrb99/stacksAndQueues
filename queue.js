/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    
    if (this.size == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size == 0) {
      throw new Error('Queue is already empty.')
    } else if (this.size == 1) {
      const node = this.first;
      this.first = null;
      this.last = null;
      this.size = 0;
      return node.val;
    } else {
      const node = this.first;
      this.first = this.first.next;
      this.size--;
      return node.val;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size == 0) {
      throw new Error('Queue is empty.')
    } else {
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size == 0;
  }
}

module.exports = Queue;
