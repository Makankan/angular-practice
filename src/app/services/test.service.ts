import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {TestArray} from '../models/TestArray';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  testUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }
getTest(): Observable<TestArray[]> {
   return this.http.get<TestArray[]>(this.testUrl);
}

}
