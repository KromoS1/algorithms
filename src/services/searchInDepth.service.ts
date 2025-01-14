import { Injectable } from '@nestjs/common';

export type FileType = {
  name: string;
};

export type DirType = {
  name: string;
  isDir: boolean;
  children: (FileType | DirType)[];
};

@Injectable()
export class SearchInDepthService {
  method(arr: (FileType | DirType)[]): string[] {
    let resArr: string[] = [];

    arr.forEach((elSystem) => {
      //@ts-ignore
      if (elSystem.isDir) {
        //@ts-ignore
        const resRecursion = this.method(elSystem.children);
        resArr = [...resArr, ...resRecursion];
      } else {
        resArr.push(elSystem.name);
      }
    });

    return resArr;
  }
}
