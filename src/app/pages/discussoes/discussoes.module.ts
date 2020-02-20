import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscussoesPage } from './discussoes.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import {PerguntaItemComponent} from './components/pergunta-item/pergunta-item.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: DiscussoesPage }])
  ],
  declarations: [DiscussoesPage, PerguntaItemComponent]
})
export class DiscussoesPageModule {}
