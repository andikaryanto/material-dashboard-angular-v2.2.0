import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MGroupusersService {

  uri = 'http://localhost:4100/m_groupuser';

  constructor(private http: HttpClient) { }

  addGroupuser(name, description) {
    const obj = {
      name: name,
      description: description
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getGroupusers() {
    return this
           .http
           .get(`${this.uri}`);
  }
}
