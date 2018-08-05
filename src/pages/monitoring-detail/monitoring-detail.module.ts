import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonitoringDetailPage } from './monitoring-detail';

@NgModule({
  declarations: [
    MonitoringDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MonitoringDetailPage),
  ],
})
export class MonitoringDetailPageModule {}
