import { Test, TestingModule } from '@nestjs/testing';

import {
  DirType,
  FileType,
  SearchInDepthService,
} from '../services/searchInDepth.service';

const createFile = (name: string): FileType => ({ name });
const createDir = (
  name: string,
  children: (FileType | DirType)[],
): DirType => ({
  name,
  isDir: true,
  children,
});

const file1 = createFile('image1.png');
const file2 = createFile('image2.png');
const file3 = createFile('image3.png');
const file4 = createFile('image4.png');
const file5 = createFile('image5.png');

const dir1 = createDir('dir1', [file1, file2]);
const dir2 = createDir('dir2', [dir1, file3]);
const dir3 = createDir('dir3', [file5, file4]);
const dir4 = createDir('dir4', [dir2, dir3]);

describe('SearchInDepthService', () => {
  let service: SearchInDepthService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [SearchInDepthService],
    }).compile();

    service = moduleRef.get<SearchInDepthService>(SearchInDepthService);
  });

  it('should be run algorithm and return array name files', () => {
    const array = service.method([dir4]);

    const resExpect = [
      'image1.png',
      'image2.png',
      'image3.png',
      'image5.png',
      'image4.png',
    ];

    resExpect.forEach((name, i) => {
      expect(name).toBe(array[i]);
    });
  });
});
