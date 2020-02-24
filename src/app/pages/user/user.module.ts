import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { UserRoutingModule, routedComponents } from './user-routing.module';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule, DateAdapter } from 'angular-calendar';


@NgModule({
  imports: [

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CommonModule,
    ThemeModule,
    UserRoutingModule,
    Ng2SmartTableModule,
    NbDateFnsDateModule,

  ],
  declarations: [
    ...routedComponents,
  ],
})
export class UserModule { }
