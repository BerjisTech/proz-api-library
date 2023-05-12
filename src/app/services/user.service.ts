import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../DataStructure/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserData() {
    // Implement fetching of user data here
  }

  updateUserData(userData: UserData) {
    // Implement updating of user data here
  }
}
