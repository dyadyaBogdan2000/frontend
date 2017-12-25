import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'

export interface User {

  username: string
  email: string
}

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<Object> {
    return this.httpClient.get(`http://127.0.0.1:8000/users/`)
  }

}