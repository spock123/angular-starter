import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { Feature1Component } from './feature1.component';
import { Feature1StoreModule } from './store';
import components from './components';

const routes: Route[] = [{ path: '', component: Feature1Component }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), Feature1StoreModule],

  declarations: [...components, Feature1Component]
})
export class Feature1Module {}
