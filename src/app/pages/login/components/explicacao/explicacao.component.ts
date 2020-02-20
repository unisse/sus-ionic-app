import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-explicacao',
  templateUrl: './explicacao.component.html',
  styleUrls: ['./explicacao.component.scss'],
})
export class ExplicacaoComponent implements OnInit {

  @Input() svg: string;
  @Input() pergunta: string;

  constructor() { }

  ngOnInit() {}

}
