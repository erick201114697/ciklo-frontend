import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

// TODO: move layouts into the framework
@Component({
  selector: 'ngx-login-layout',
  styleUrls: ['./login.layout.scss'],
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <ngx-header-login></ngx-header-login>
      </nb-layout-header>

      <nb-layout-column class="layout-column-login">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class LoginLayoutComponent implements OnDestroy {

  private alive = true;

  currentTheme: string;

  constructor(protected themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
