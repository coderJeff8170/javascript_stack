class Stack {
  #head = null;

  constructor() {}

  isEmpty = () => {
    return this.#head === null;
  };

  push = (item) => {
    let node = new MyNode(item);
    node.next = this.#head;
    this.#head = node;
  };

  peek = () => {
    return this.#head === null ? null : this.#head.data;
  };

  pop = () => {
    if (this.isEmpty()) {
      throw new Error("can't pop from empty stack");
    } else {
      let temp = this.#head.data;
      this.#head = this.#head.next;
      return temp;
    }
  };

  contains = (item) => {
      let doesContain = false;
    if (this.isEmpty()) {
      throw new Error("stack is empty and contains nothing");
    } else {
        let temp = this.#head;
      while(temp != null) {
        if(temp.data === item){
            doesContain = true;
            break;
        }
        temp = temp.next;
      }
    }
    return doesContain;
  };
}

class MyNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
