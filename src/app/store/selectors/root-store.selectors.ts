import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRootStoreState } from '../types';

export const selectRootStoreState = createFeatureSelector<IRootStoreState>('root');
export const selectPending = createSelector(selectRootStoreState, state => state.pending);
