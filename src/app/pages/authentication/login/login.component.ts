import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationData } from '../../../@core/data/authentication-data';
import { Constants } from '../../../config/constants';
import { LoginRes } from '../../../domain/entities/authentication/login';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  email: string = '';
  pass: string = '';
  error: string;

  constructor(private service: AuthenticationData,
    protected router: Router) {
  }

  login(form: any) {
    this.service.login({
      'user': form.value.email,
      'mt1': form.value.pass,
    }).subscribe((data: LoginRes) => {
      localStorage.setItem(Constants.user, JSON.stringify(data));
      return this.router.navigate(['pages/user/profile']);
    }, error => {
      this.error = error.body.message;
    });
  }

  ngOnInit() { // In the ngOnInit() or in the constructor
    const el = document.getElementById('nb-global-spinner');
    if (el) {
      el.style['display'] = 'none';
    }
  }
}
