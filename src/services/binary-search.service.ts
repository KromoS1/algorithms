import { Injectable } from '@nestjs/common';

@Injectable()
export class BinarySearchService {
  method(
    arr: number[],
    searchedEl: number,
  ): { indexNumber: number; countIteration: number } {
    let indexNumber = 0;
    let countIteration = 0;

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      countIteration++;
      let mid = Math.ceil((low + high) / 2);
      let gues = arr[mid];

      if (gues === searchedEl) {
        return { countIteration, indexNumber: mid };
      } else if (gues > searchedEl) {
        high = mid - 1;
      } else if (gues < searchedEl) {
        low = mid + 1;
      }
    }

    return { indexNumber, countIteration };
  }
}
