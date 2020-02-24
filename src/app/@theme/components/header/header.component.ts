import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationData } from '../../../@core/data/authentication-data';
import { IUser } from '../../../domain/entities/user/user';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: IUser;

  userMenu = [{ title: 'Perfil' }, { title: 'Cerrar Sesión' }];

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private analyticsService: AnalyticsService,
    private layoutService: LayoutService,
    private authService: NbAuthService,
    private themeService: NbThemeService,
    private router: Router,
    private authenticationService: AuthenticationData) {

    this.themeService.changeTheme('corporate');
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
        }
      });
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));


    this.menuService.onItemClick()
      .pipe(
        map(({ item: { title } }) => title),
      ).subscribe(title => {
        if (title === 'Perfil') {
          return this.router.navigate(['/pages/user/profile']);
        } else if (title === 'Cerrar Sesión') {
          this.logout();
        }
      });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  onMenuItemClick(event) {
    console.log(event);
  }

  logout() {
    localStorage.clear();
    return this.router.navigate(['auth/login']);
  }
}
