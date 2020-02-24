import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientService } from '../http/http-client-service';
import { AuthenticationService } from './authentication.service';


const SERVICES = [
  AuthenticationService,
  HttpClientService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ServiceDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ServiceDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
