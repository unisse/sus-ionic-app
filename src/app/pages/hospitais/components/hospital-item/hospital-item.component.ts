import {Component, Input, OnInit} from '@angular/core';
import {SearchResult} from '../../../../shared/services/base-firestore.service';
import {Hospital} from '../../domain/hospital';
import {Pergunta} from '../../../discussoes/domain/pergunta';

@Component({
  selector: 'app-hospital-item',
  templateUrl: './hospital-item.component.html',
  styleUrls: ['./hospital-item.component.scss'],
})
export class HospitalItemComponent implements OnInit {

  @Input() item: SearchResult<Hospital>;

  constructor() { }

  ngOnInit() {}

  isEmpty() {
    return this.item.obj === null;
  }

}
