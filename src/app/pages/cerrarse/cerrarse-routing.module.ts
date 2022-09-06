import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerrarsePage } from './cerrarse.page';

const routes: Routes = [
  {
    path: '',
    component: CerrarsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerrarsePageRoutingModule {}
