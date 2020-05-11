import { Component, OnInit } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  message = '';

  constructor(private translate: TranslateService) {
    console.log('OrdersComponent constructor');
    this.updateContent();
   }

  ngOnInit() {
  }

  updateContent() {
    const currentLang = this.translate.currentLang;
    console.log(`OrdersComponent CurrentLang => ${currentLang}`);
    this.translate.reloadLang(this.translate.currentLang)
    this.translate.get('message').subscribe( (x:string) => this.message=x );
  }

}
