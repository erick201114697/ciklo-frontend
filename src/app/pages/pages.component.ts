import { Component } from '@angular/core';

import { MENU_ITEMS_ADMIN } from './pages-menu';
import { LoginRes } from '../domain/entities/authentication/login';
import { Constants } from '../config/constants';
import { NbMenuItem } from '@nebular/theme';

import { ToasterConfig } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import { NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu autoCollapse="true" [items]='menu'></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {
  menu: NbMenuItem[];

  config: ToasterConfig;

  index = 1;
  destroyByClick = true;
  duration = 4000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;


  constructor(private toastrService: NbToastrService) {
    const user: LoginRes = JSON.parse(localStorage.getItem(Constants.user));
    if (user) {
      if (user.scope[0] === 'user') {
        this.menu = MENU_ITEMS_ADMIN;
      } else {
        this.menu = MENU_ITEMS_ADMIN;
      }
    }
  }

  /**
   * Function to show a toast on screen
   * @param type it can be any option of: NbToastStatus
   * @param title message of the title of alert
   * @param body detail of the alert
   */
  public showToast(type: NbToastStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }
}
