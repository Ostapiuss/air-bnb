import { Component, OnInit } from '@angular/core';
import { PLACES_MASTER } from '@mocks/palces';
import { Store } from '@ngrx/store';
import { filtersSelector } from 'app/reducers/app';
import { Observable } from 'rxjs';
import { filterByDate } from 'app/shared/common';
import { resetFilters } from 'app/reducers/app';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
  places = PLACES_MASTER;
  filters$: Observable<any> = this.store.select(filtersSelector);
  noDataWidget: boolean = false;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.filterData();
  };

  filterData() {
    this.filters$.subscribe((data) => {
      let filtered = [...PLACES_MASTER];

      for (const [key, value] of Object.entries(data)) {
        if (Boolean(value)) {
          filtered = filtered.filter((item: any) => item['country'] === data['country'])

          if (key === 'arriveDate' || key === 'departureDate') {
            filtered = filterByDate(data, filtered);
          }
        }
      }

      if (filtered.length <= 0) {
        this.noDataWidget = true;
      }
      this.places = filtered;
    })
  }

  resetFilters() {
    this.store.dispatch(resetFilters());
  }
}
