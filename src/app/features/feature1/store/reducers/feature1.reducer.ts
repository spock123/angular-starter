import { createReducer, on } from '@ngrx/store';
import * as Actions from '../actions';
import { IFeature1State } from '../types';

const INITIAL_STATE: IFeature1State = {
  pending: false
};

export const reducer = createReducer(
  INITIAL_STATE,

  on(Actions.pendingAction, (state, { pending }) => ({
    ...state,
    pending
  }))
);
