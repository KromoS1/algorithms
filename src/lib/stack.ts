// Стек (LIFO)
export class Stack<T> {
  stack: T[];

  constructor() {
    this.stack = [];
  }
  push(item: T) {
    this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
}
