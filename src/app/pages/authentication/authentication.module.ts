import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { AuthenticationRoutingModule, routedComponents } from './authentication-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    AuthenticationRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class AuthenticationModule { }
