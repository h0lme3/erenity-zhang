import { TestBed } from '@angular/core/testing';

import { JoinerBoardService } from './joiner-board.service';

describe('JoinerBoardService', () => {
  let service: JoinerBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoinerBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
