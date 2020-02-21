import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {PerguntaService} from '../../services/pergunta.service';
import {Pergunta, PerguntaBuilder} from '../../domain/pergunta';
import {ModalController} from '@ionic/angular';
import {CadastrarRespostaComponent} from './components/cadastrar-resposta/cadastrar-resposta.component';

@Component({
  selector: 'app-detalhe-pergunta',
  templateUrl: './detalhe-pergunta.page.html',
  styleUrls: ['./detalhe-pergunta.page.scss'],
})
export class DetalhePerguntaPage implements OnInit {

  pergunta: Pergunta;

  constructor(private route: ActivatedRoute,
              private perguntaService: PerguntaService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.perguntaService.findByIdAsObj(params.id).toPromise().then(pergunta => this.pergunta = pergunta);
    });
  }

    async cadastrarResposta() {
      const modal = await this.modalController.create({
        component: CadastrarRespostaComponent
      });
      return await modal.present();
    }
}
