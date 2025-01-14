import { Test, TestingModule } from '@nestjs/testing';
import { BinarySearchService } from '../services/binary-search.service';

describe('BinarySearchService', () => {
  let service: BinarySearchService;
  let smallArr = Array.from({ length: 100 }).map((_, i) => i + 1);
  let bigArr = Array.from({ length: 24 * 10000 }).map((_, i) => i + 1);
  let superBigArr = Array.from({ length: 240000000 }).map((_, i) => i + 1);

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [BinarySearchService],
    }).compile();

    service = moduleRef.get<BinarySearchService>(BinarySearchService);
  });

  it('should be find element from 100 elements on 7 step', () => {
    const { countIteration, indexNumber } = service.method(smallArr, 85);

    expect(indexNumber).toBe(84);
    expect(countIteration).toBe(6);
  });

  it('should be find element from 240k on 18 step', () => {
    const { countIteration, indexNumber } = service.method(bigArr, 100002);

    expect(indexNumber).toBe(100001);
    expect(countIteration).toBe(18);
  });

  it('should be find element from 240m on 27 step', () => {
    const { countIteration, indexNumber } = service.method(superBigArr, 2);

    expect(indexNumber).toBe(1);
    expect(countIteration).toBe(27);
  });
});
