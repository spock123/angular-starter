import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { Actions, ofType, ROOT_EFFECTS_INIT, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromSelectors from '../selectors';
import * as fromActions from '../actions';

@Injectable()
export class RootStoreEffects {
  constructor(
    @Inject(LOCALE_ID) protected locale: string,
    private actions$: Actions,
    private store: Store
  ) {}
}
