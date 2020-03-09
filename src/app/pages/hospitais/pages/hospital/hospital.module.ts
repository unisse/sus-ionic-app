import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalPageRoutingModule } from './hospital-routing.module';

import { HospitalPage } from './hospital.page';
import {CabecalhoHospitalComponent} from './components/cabecalho-hospital/cabecalho-hospital.component';
import {FeedHospitalComponent} from './components/feed-hospital/feed-hospital.component';
import {HistoricoOcorreciasComponent} from './components/historico-ocorrecias/historico-ocorrecias.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitalPageRoutingModule
  ],
  declarations: [HospitalPage, CabecalhoHospitalComponent, FeedHospitalComponent, HistoricoOcorreciasComponent]
})
export class HospitalPageModule {}
