import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// End of ngx-translate imports

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,

    // configure the imports
    HttpClientModule,
    TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: CustomersHttpLoaderFactory,
            deps: [HttpClient]
        },
    })
    // End of ngx-translate imports
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule {
  constructor() {
    console.log('CustomersModule constructor');
  }
}

// required for AOT compilation
export function CustomersHttpLoaderFactory(http: HttpClient) {
  console.log('CustomersModule call CustomersHttpLoaderFactory');
  return new TranslateHttpLoader(http, './assets/i18n/customers/');
}
// End of ngx-translate imports
