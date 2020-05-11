import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// End of ngx-translate imports

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,

    // configure the imports
    HttpClientModule,
    TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: OrdersHttpLoaderFactory,
            deps: [HttpClient]
        },
    })
    // End of ngx-translate imports
  ],
  declarations: [OrdersComponent]
})
export class OrdersModule {

  constructor() {
    console.log('OrdersModule constructor');
  }

}

// required for AOT compilation
export function OrdersHttpLoaderFactory(http: HttpClient) {
  console.log('OrdersModule call OrdersHttpLoaderFactory');
  return new TranslateHttpLoader(http, './assets/i18n/orders/');
}
// End of ngx-translate imports
