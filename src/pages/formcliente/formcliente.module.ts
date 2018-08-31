import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormclientePage } from './formcliente';

@NgModule({
  declarations: [
    FormclientePage,
  ],
  imports: [
    IonicPageModule.forChild(FormclientePage),
  ],
})
export class FormclientePageModule {}
