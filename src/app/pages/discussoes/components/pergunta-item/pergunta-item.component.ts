import {Component, Input, OnInit} from '@angular/core';
import {Pergunta} from '../../domain/pergunta';

@Component({
  selector: 'app-pergunta-item',
  templateUrl: './pergunta-item.component.html',
  styleUrls: ['./pergunta-item.component.scss'],
})
export class PerguntaItemComponent implements OnInit {

  @Input() empty: boolean;
  @Input() pergunta: Pergunta;

  constructor() { }

  ngOnInit() {}

}
