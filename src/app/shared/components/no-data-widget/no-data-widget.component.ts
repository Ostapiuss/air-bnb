import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-data-widget',
  templateUrl: './no-data-widget.component.html',
  styleUrls: ['./no-data-widget.component.scss']
})
export class NoDataWidgetComponent implements OnInit {

  @Input() textMessage: string = 'No any available data';

  constructor() { }

  ngOnInit(): void {
  }

}
