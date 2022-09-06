import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEmployeePagePage } from './add-employee-page.page';

const routes: Routes = [
  {
    path: '',
    component: AddEmployeePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEmployeePagePageRoutingModule {}
