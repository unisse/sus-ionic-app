import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DetalhePerguntaPageRoutingModule} from './detalhe-pergunta-routing.module';

import {DetalhePerguntaPage} from './detalhe-pergunta.page';
import {PerguntaCardComponent} from './components/pergunta-card/pergunta-card.component';
import {RespostaCardComponent} from './components/resposta-card/resposta-card.component';
import {CadastrarRespostaComponent} from './components/cadastrar-resposta/cadastrar-resposta.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetalhePerguntaPageRoutingModule
    ],
    declarations: [
        DetalhePerguntaPage,
        PerguntaCardComponent,
        RespostaCardComponent,
        CadastrarRespostaComponent
    ],
    entryComponents: [CadastrarRespostaComponent]
})
export class DetalhePerguntaPageModule {
}
