import { createReducer, on } from '@ngrx/store';
import * as Actions from '../actions';
import { IRootStoreState } from '../types';

const INITIAL_STATE: IRootStoreState = {
  pending: false
};

export const reducer = createReducer(
  INITIAL_STATE,

  on(Actions.pendingAction, (state, { pending }) => ({
    ...state,
    pending
  }))
);
