import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'environments/environment';
import { appReducer, AppState } from 'app/reducers/app';

export interface State {
  app: AppState;
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
