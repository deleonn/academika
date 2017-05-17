/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubjectListService } from './subject-list.service';

describe('SubjectListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectListService]
    });
  });

  it('should ...', inject([SubjectListService], (service: SubjectListService) => {
    expect(service).toBeTruthy();
  }));
});
