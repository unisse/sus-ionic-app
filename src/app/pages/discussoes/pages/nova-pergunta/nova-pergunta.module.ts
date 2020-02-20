import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaPerguntaPageRoutingModule } from './nova-pergunta-routing.module';

import { NovaPerguntaPage } from './nova-pergunta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaPerguntaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NovaPerguntaPage]
})
export class NovaPerguntaPageModule {}
