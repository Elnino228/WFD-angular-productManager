import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import {User} from '../../core/models/User';
import {Product} from '../../core/models/Product';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  formLogin: FormGroup;
  user: User;

  constructor(private authService: AuthService) {
    this.user = new User();
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    this.authService.login(this.user);
    this.initUser();
    alert('Login successfully');
  }

  logout() {
    this.authService.logout();
    alert('Logout successfully');
  }

  initUser() {
    this.user = new User();
  }
}
