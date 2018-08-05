import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPelayananPage } from './detail-pelayanan';

@NgModule({
  declarations: [
    DetailPelayananPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPelayananPage),
  ],
})
export class DetailPelayananPageModule {}
