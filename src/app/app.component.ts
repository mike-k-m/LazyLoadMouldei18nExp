import { Component } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  currentLang = 'en';  //

  constructor(private translate: TranslateService) {
    console.log('AppComponent constructor');

    this.translate.defaultLang = this.currentLang;
    this.translate.use(this.currentLang);

    this.updateContent();
  }

  updateContent() {
    const currentLang = this.translate.currentLang;
    console.log(`AppComponent CurrentLang => ${currentLang}`);
    this.translate.reloadLang(this.translate.currentLang)
    this.translate.get('title').subscribe( (x:string) => this.title=x );
  }


  changeLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(this.currentLang);
    this.updateContent();
  }
}
