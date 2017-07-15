import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildPizzaComponent } from './build-pizza/build-pizza.component';

const routes: Routes = [
  {
    path: '',
    component: BuildPizzaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
