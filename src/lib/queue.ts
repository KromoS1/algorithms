// Очередь (FIFO)
export class Queue<T> {
  queue: T[];

  constructor() {
    this.queue = [];
  }

  enqueue(item: T) {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }
}
