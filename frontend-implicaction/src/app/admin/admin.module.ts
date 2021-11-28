import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {SharedModule} from './shared/shared.module';
import {CompaniesComponent} from './companies/companies.component';
import {TableModule} from 'primeng/table';
import {CompaniesModule} from './companies/companies.module';
import {FeatherModule} from 'angular-feather';
import {PostComponent} from './post/post.component';
import {PostModule} from './post/post.module';


@NgModule({
  declarations: [
    AdminComponent,
    CompaniesComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    TableModule,
    CompaniesModule,
    FeatherModule,
    PostModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
})
export class AdminModule {
  constructor() {
    registerLocaleData(localeFr, 'fr'); // passage du format de date en français
  }
}
