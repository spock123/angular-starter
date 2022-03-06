import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import effects from './effects';
import reducers from './reducers';

@NgModule({
  imports: [StoreModule.forFeature('feature1', reducers), EffectsModule.forFeature(effects)]
})
export class Feature1StoreModule {}
