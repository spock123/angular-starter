import { createAction, props } from '@ngrx/store';

const storeName = '[Root]';

export const pendingAction = createAction(
  `${storeName} set pending`,
  props<{ pending: boolean }>()
);
