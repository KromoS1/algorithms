import { Injectable } from '@nestjs/common';
import { Queue } from '../lib/queue';

export type PersonType = {
  id: number;
  name: string;
  isSeller: boolean;
  friends: PersonType[];
};

@Injectable()
export class SearchInWidthService {
  sellerMango(person: PersonType) {
    return person.isSeller;
  }

  // Пример найти продавца манго друзьях
  method(persons: PersonType[]): PersonType {
    // Создаем очередь для проверки
    const search_queue = new Queue<PersonType>();

    //Добавляем в очередь людей первого уровня
    persons.forEach((person) => search_queue.enqueue(person));

    // Коллекция уже проверенных друзей
    const searched = new Set([]);

    // Проверяем есть ли значения в очереди
    while (search_queue.queue.length) {
      // Берем первый элемент очереди
      const person = search_queue.dequeue();
      // Проверяем был ли уже проверен человек
      if (!searched.has(person)) {
        // Проверка является ли человек продавцом
        if (this.sellerMango(person)) {
          return person;
        } else {
          // ставим в очередь всех друзей
          person.friends.forEach((p) => search_queue.enqueue(p));
          // добавляем человека в "проверенные"
          searched.add(person);
        }
      }
    }
    return null;
  }
}
