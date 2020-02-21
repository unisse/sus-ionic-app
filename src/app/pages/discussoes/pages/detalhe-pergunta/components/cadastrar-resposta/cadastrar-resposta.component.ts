import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-cadastrar-resposta',
  templateUrl: './cadastrar-resposta.component.html',
  styleUrls: ['./cadastrar-resposta.component.scss'],
})
export class CadastrarRespostaComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss().then();
  }
}
