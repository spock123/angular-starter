import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { Feature1Component } from './feature1.component';

const routes: Route[] = [{ path: '', component: Feature1Component }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],

  declarations: [Feature1Component],
})
export class Feature1Module {}
