import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../DataStructure/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserData() {
    // Fetch user data from the ProZ API
    return this.http.get<UserData>('https://api.proz.com/v1/member-status');
  }

  updateUserData(userData: UserData) {
    // Implement updating of user data here
    return this.http.put<UserData>('https://api.proz.com/v1/api/user', userData);
  }
}
