import { Component, OnInit } from '@angular/core';
import { PLACES_MASTER } from '@mocks/palces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  places = PLACES_MASTER;

  constructor() { }

  ngOnInit(): void {
  }



}
