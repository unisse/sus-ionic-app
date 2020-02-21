import {Component, Input, OnInit} from '@angular/core';
import {Pergunta} from '../../../../domain/pergunta';

@Component({
  selector: 'app-pergunta-card',
  templateUrl: './pergunta-card.component.html',
  styleUrls: ['./pergunta-card.component.scss'],
})
export class PerguntaCardComponent implements OnInit {

  @Input() pergunta: Pergunta;

  constructor() { }

  ngOnInit() {}

}
