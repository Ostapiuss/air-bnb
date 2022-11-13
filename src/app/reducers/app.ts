import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';
import { SET_FILTER, RESET_FILTER } from '@constants/app.constansts';

export const setFilters = createAction(
  SET_FILTER,
  props<{filters: Filters }>()
);
export const resetFilters = createAction(RESET_FILTER);

interface Filters {
  country: string | null,
  arriveDate: string | null,
  departureDate: string | null,
}

export interface AppState {
  filters: Filters
}

export const initialState: AppState = {
  filters: {
    country: null,
    arriveDate: null,
    departureDate: null,
  }
}

export const appReducer = createReducer(
  initialState,
  on(setFilters, (state, action) => ({
    ...state,
    filters: {
      ...action.filters,
    }
  })),
  on(resetFilters, state => ({
    ...initialState
  }))
);

export const featureSelector = createFeatureSelector<AppState>('app');

export const filtersSelector = createSelector(
  featureSelector,
  state => state.filters
);
