import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromSelectors from '../selectors';
import * as fromTypes from '../types';

@Injectable({
  providedIn: 'root'
})
export class Feature1Facade {
  rootStoreState$: Observable<fromTypes.IFeature1State> = this.store.select(
    fromSelectors.selectFeature1StoreState
  );

  pending$: Observable<boolean> = this.store.select(fromSelectors.selectPending);

  constructor(private store: Store) {}
}
