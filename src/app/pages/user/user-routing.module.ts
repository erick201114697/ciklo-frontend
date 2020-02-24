import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {UserComponent} from './user.component';
import {AsignacionComponent} from './asignacion/asignacion.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'asignacion',
      component: AsignacionComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}

export const routedComponents = [
  UserComponent,
  AsignacionComponent,
  ProfileComponent,
];
