import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
// End of ngx-translate imports

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    // configure the imports
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: RootHttpLoaderFactory,
            deps: [HttpClient]
        },
    })
    // End of ngx-translate imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    console.log('AppModule constructor');
  }

}

// required for AOT compilation
export function RootHttpLoaderFactory(http: HttpClient) {
  console.log('AppModule call RootHttpLoaderFactory');
  return new TranslateHttpLoader(http, './assets/i18n/root/');
}
// End of ngx-translate imports
