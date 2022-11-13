import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { setFilters } from 'app/reducers/app';

import { FILTER_OPTIONS, LocationOptions } from '@constants/navigation.constants';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  navigationForm: FormGroup = new FormGroup({
    country: new FormControl(null, Validators.required),
    arriveDate: new FormControl(null),
    departureDate: new FormControl(null),
  });
  // @ts-ignore
  autoCompleteOptions: Observable<string[]>;

  isUseFilterNavigation: boolean = false;
  options: { ARRIVED: string, DEPARTURE: string };
  activeOptions: any;
  locationOptions: string[];

  constructor(private store: Store) {
    this.options = FILTER_OPTIONS;
    this.locationOptions = LocationOptions;
  }

  ngOnInit(): void {
    this.autoCompleteOptions = this.navigationForm.controls['country'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  };

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.locationOptions.filter((option) => option.toLowerCase().includes(filterValue));
  };

  handleOptionClick(option: string) {
    this.isUseFilterNavigation = true;
    this.activeOptions = option;
  };

  getArrivedDate () {
    return new FormControl(this.navigationForm.get('arriveDate')?.value);
  };

  upToDateFilter = (d: Date | null): boolean => {
    return d ? new Date(d) > new Date() : false;
  };

  isDepartureFieldDisabled = (): boolean => {
    return Boolean(this.navigationForm.get('arriveDate')?.invalid);
  };

  submitNavigationForm() {
    this.store.dispatch(setFilters({
      filters: { ...this.navigationForm.value }
    }))
  }
}
