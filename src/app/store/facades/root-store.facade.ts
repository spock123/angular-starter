import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromSelectors from '../selectors';
import * as fromActions from '../actions';
import * as fromTypes from '../types';

@Injectable({
  providedIn: 'root'
})
export class RootStoreFacade {
  rootStoreState$: Observable<fromTypes.IRootStoreState> = this.store.select(
    fromSelectors.selectRootStoreState
  );

  pending$: Observable<boolean> = this.store.select(fromSelectors.selectPending);

  constructor(private store: Store) {}
}
