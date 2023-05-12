import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MembershipStatus } from '../DataStructure/membership-status';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private http: HttpClient) { }

  getMembershipStatus() {
    // Implement fetching of membership status here
    return this.http.get<MembershipStatus>('https://api.proz.com/v1/api/membership');
  }

  updateMembershipStatus(membershipStatus: MembershipStatus) {
    // Implement updating of membership status here
    return this.http.put<MembershipStatus>('https://api.proz.com/v1/api/membership', membershipStatus);
  }
}
