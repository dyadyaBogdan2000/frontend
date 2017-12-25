import {Component} from '@angular/core'
import {User, UsersService} from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: Object
  userName = ''
  userEmail = ''

  constructor(private usersService: UsersService) {
  }

  getUsers() {
    this.usersService.getUsers().subscribe(users => {
      console.log('Get Users: ', users)
      this.users = users
    })
  }


}
