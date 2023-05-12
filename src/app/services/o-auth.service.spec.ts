import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OAuthService } from './o-auth.service';

describe('OAuthService', () => {
  let service: OAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule here
      providers: [OAuthService]
    });
    service = TestBed.inject(OAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
