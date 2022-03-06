import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFeature1State } from '../types';

export const selectFeature1StoreState = createFeatureSelector<IFeature1State>('feature1');
export const selectPending = createSelector(selectFeature1StoreState, state => state.pending);
