import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaOcorrenciaPageRoutingModule } from './nova-ocorrencia-routing.module';

import { NovaOcorrenciaPage } from './nova-ocorrencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaOcorrenciaPageRoutingModule
  ],
  declarations: [NovaOcorrenciaPage]
})
export class NovaOcorrenciaPageModule {}
