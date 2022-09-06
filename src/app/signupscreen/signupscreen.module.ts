import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupscreenPageRoutingModule } from './signupscreen-routing.module';

import { SignupscreenPage } from './signupscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupscreenPageRoutingModule
  ],
  declarations: [SignupscreenPage]
})
export class SignupscreenPageModule {}
