import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RncsPage } from './rncs.page';

const routes: Routes = [
  {
    path: '',
    component: RncsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RncsPageRoutingModule {}
