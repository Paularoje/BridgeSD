import { TestBed } from '@angular/core/testing';

import { NoticiaSsService } from './noticia-ss.service';

describe('NoticiaSsService', () => {
  let service: NoticiaSsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiaSsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
