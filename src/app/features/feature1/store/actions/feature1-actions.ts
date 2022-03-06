import { createAction, props } from '@ngrx/store';

const moduleName = '[Feature1]';

export const pendingAction = createAction(
  `${moduleName} set pending`,
  props<{ pending: boolean }>()
);
