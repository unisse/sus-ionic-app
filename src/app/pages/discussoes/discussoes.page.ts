import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll, ModalController} from '@ionic/angular';
import {PerguntaService} from './services/pergunta.service';
import {Constants, SearchResult} from '../../shared/services/base-firestore.service';
import {Pergunta} from './domain/pergunta';
import {Filtro, OrderBy} from '../../shared/domain/filtro.domain';
import {Router} from '@angular/router';

@Component({
  selector: 'app-discussoes',
  templateUrl: 'discussoes.page.html',
  styleUrls: ['discussoes.page.scss']
})
export class DiscussoesPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

  onSearch = false;
  perguntas: SearchResult<Pergunta>[] = [];
  orderBy: Filtro = new OrderBy('criacao');

  constructor(private perguntaService: PerguntaService, private router: Router) {
  }

  ngOnInit(): void {
    this.addEleven();
    this.perguntaService.filterCollection([this.orderBy]).toPromise().then(perguntas => {
      this.perguntas = perguntas;
    });
  }

  private addEleven(): void {
    for (let i = 0; i < 11; i++) {
      this.perguntas.push(SearchResult.createEmpty<Pergunta>());
    }
  }

  loadData(event) {
    const lastPergunta = this.perguntas[this.perguntas.length - 1];
    this.addEleven();
    this.perguntaService.filterCollection([this.orderBy], lastPergunta).toPromise().then(perguntas => {
      this.perguntas = this.perguntas.filter(p => !p.empty).concat(perguntas);
      event.target.complete();
      if (perguntas.length < Constants.limit) {
        event.target.disabled = true;
      }
    });
  }

  showSearch() {
    this.onSearch = true;
  }

  hideSearch() {
    this.onSearch = false;
  }

  goToDetalhe(pergunta: SearchResult<Pergunta>) {
    this.router.navigate(['/app/pergunta/' + pergunta.obj.uid]);
  }

}
