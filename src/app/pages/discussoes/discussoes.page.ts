import {Component, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-discussoes',
  templateUrl: 'discussoes.page.html',
  styleUrls: ['discussoes.page.scss']
})
export class DiscussoesPage {

  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

  onSearch = false;
  dataList: any;

  constructor() {
    this.dataList = [];

    for (let i = 0; i < 25; i++) {
      this.dataList.push('Item number ' + this.dataList.length);
    }
  }

  loadData(event) {

    setTimeout(() => {
      console.log('Done');
      for (let i = 0; i < 25; i++) {
        this.dataList.push('Item number ' + this.dataList.length);
      }
      event.target.complete();

      if (this.dataList.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  showSearch() {
    console.log('batata');
    this.onSearch = true;
  }

  hideSearch() {
    this.onSearch = false;
  }

}
