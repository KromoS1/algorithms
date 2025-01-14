import { Injectable } from '@nestjs/common';
import { IAlgorithm } from './interface';

@Injectable()
export class FastSortService implements IAlgorithm {
  method() {
    return 1;
  }
}
