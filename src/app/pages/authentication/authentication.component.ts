import { Component } from '@angular/core';

@Component({
  selector: 'ngx-login',
  template: `
  <ngx-login-layout>
    <router-outlet></router-outlet>
  </ngx-login-layout>
`,
})
export class AuthenticationComponent {
  constructor() {}
}
