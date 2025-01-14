import { Test, TestingModule } from '@nestjs/testing';

import {
  PersonType,
  SearchInWidthService,
} from '../services/searchInWidth.service';

// Функция для создания человека
const createPerson = (
  id: number,
  name: string,
  isSeller: boolean,
): PersonType => {
  return {
    id,
    name,
    isSeller,
    friends: [],
  };
};

// Создаем людей
const person1 = createPerson(1, 'Alice', false);
const person2 = createPerson(2, 'Bob', true);
const person3 = createPerson(3, 'Charlie', false);
const person4 = createPerson(4, 'David', true);
const person5 = createPerson(5, 'Eve', false);

// Устанавливаем друзей
person1.friends.push(person2, person3);
person2.friends.push(person1, person4);
person3.friends.push(person1, person5);
person4.friends.push(person2);
person5.friends.push(person3);

// Собираем всех людей в массив для удобства
export const persons: PersonType[] = [
  person1,
  person2,
  person3,
  person4,
  person5,
];

describe('SearchInWidthService', () => {
  let service: SearchInWidthService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [SearchInWidthService],
    }).compile();

    service = moduleRef.get<SearchInWidthService>(SearchInWidthService);
  });

  it('service should be find', () => {
    expect(service).toBeDefined();
  });

  it('should be find seller person - Bob', () => {
    const person: PersonType = service.method(persons);
    expect(person.name).toBe('Bob');
  });
});
