import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEmployeePagePageRoutingModule } from './add-employee-page-routing.module';

import { AddEmployeePagePage } from './add-employee-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEmployeePagePageRoutingModule
  ],
  declarations: [AddEmployeePagePage]
})
export class AddEmployeePagePageModule {}
