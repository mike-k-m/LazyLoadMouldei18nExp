import { Component, OnInit } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  message = '';

  constructor(private translate: TranslateService) {
    console.log('CustomersComponent constructor');
    this.updateContent();
  }

  ngOnInit() {
  }

  updateContent() {
    const currentLang = this.translate.currentLang;
    console.log(`CustomersComponent CurrentLang => ${currentLang}`);
    this.translate.reloadLang(this.translate.currentLang)
    this.translate.get('message').subscribe( (x:string) => this.message=x );
  }

}
