/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubjectDetailService } from './subject-detail.service';

describe('SubjectDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectDetailService]
    });
  });

  it('should ...', inject([SubjectDetailService], (service: SubjectDetailService) => {
    expect(service).toBeTruthy();
  }));
});
