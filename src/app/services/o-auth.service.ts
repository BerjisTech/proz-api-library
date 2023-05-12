import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OAuthService {

  constructor(private http: HttpClient) { }

  authenticate() {
    // Implement OAuth flow here
  }

  getAccessToken() {
    // Retrieve access token here
  }
}
