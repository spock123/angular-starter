import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature1',
    loadChildren: () =>
      import('./features/feature1').then((m) => m.Feature1Module),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/feature1',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
