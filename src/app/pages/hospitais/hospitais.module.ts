import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HospitaisPage } from './hospitais.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import {HospitalItemComponent} from './components/hospital-item/hospital-item.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: HospitaisPage }])
  ],
  declarations: [HospitaisPage, HospitalItemComponent]
})
export class HospitaisPageModule {}
