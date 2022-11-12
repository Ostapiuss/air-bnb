import { Component, Input, OnInit } from '@angular/core';
import { PriceCurrency } from '@constants/main';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  // @ts-ignore
  @Input() placeItem;

  constructor() {
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  getPriceTitle(price, currency): string {
    // @ts-ignore
    return `${price} ${PriceCurrency[currency]}`
  }

}
