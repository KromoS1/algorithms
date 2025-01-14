import { Test, TestingModule } from '@nestjs/testing';
import { FastSortService } from '../services/fast-sort.service';

describe('FastSortService', () => {
  let service: FastSortService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [FastSortService],
    }).compile();

    service = moduleRef.get<FastSortService>(FastSortService);
  });

  it('method should be run', () => {
    expect(service).toBeDefined();

    const res = service.method();
    expect(res).toBe(1);
  });
});
