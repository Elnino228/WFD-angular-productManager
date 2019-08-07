import {Injectable} from '@angular/core';
import {User} from './core/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  admin: User = {username: 'admin', password: '123'};

  constructor() {
    this.user = new User();
  }

  isAuthenticated(): boolean {
    return this.user.username === this.admin.username && this.user.password === this.admin.password;
  }

  login(user: User) {
    this.user = user;
  }

  logout() {
    this.user = new User();
  }
}
