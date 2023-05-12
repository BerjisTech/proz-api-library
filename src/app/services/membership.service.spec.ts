import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MembershipService } from './membership.service';

describe('MembershipService', () => {
  let service: MembershipService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule here
      providers: [MembershipService]
    });
    service = TestBed.inject(MembershipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
