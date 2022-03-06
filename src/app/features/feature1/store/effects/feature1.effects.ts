import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromSelectors from '../selectors';
import * as fromActions from '../actions';

@Injectable()
export class Feature1Effects {
  constructor(private actions$: Actions, private store: Store) {}
}
