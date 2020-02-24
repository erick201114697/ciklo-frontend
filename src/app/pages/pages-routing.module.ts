import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {RouterAuthGuard} from '../@core/router.guard';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'authentication',
      loadChildren: './authentication/authentication.module#AuthenticationModule',
      canActivate: [RouterAuthGuard],
    },
    {
      path: 'user',
      loadChildren: './user/user.module#UserModule',
      canActivate: [RouterAuthGuard],
    }],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
