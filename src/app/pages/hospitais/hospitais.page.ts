import {Component, OnInit} from '@angular/core';
import {Hospital} from './domain/hospital';
import {SearchResult} from '../../shared/services/base-firestore.service';
import {HospitalService} from './services/hospital.service';
import {Pergunta} from '../discussoes/domain/pergunta';

@Component({
  selector: 'app-tab2',
  templateUrl: 'hospitais.page.html',
  styleUrls: ['hospitais.page.scss']
})
export class HospitaisPage implements OnInit {

  onSearch = false;
  hospitais: SearchResult<Hospital>[] = [];

  constructor(private hospitalService: HospitalService) {}

  ngOnInit(): void {
    this.addFour();
    this.hospitalService.filterCollection().toPromise().then(hospitais => {
      this.hospitais = hospitais;
    });
  }

  showSearch() {
    this.onSearch = true;
  }

  hideSearch() {
    this.onSearch = false;
  }

  loadData($event: CustomEvent) {
  }

  private addFour(): void {
    for (let i = 0; i < 4; i++) {
      this.hospitais.push(SearchResult.createEmpty<Hospital>());
    }
  }

}
