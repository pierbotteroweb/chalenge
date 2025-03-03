import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlaceholderService {
  constructor(private http: HttpClient) {}
  API_URL: string = 'https://jsonplaceholder.typicode.com/users';

  getUsers() {
    return this.http.get(this.API_URL);
  }
}
