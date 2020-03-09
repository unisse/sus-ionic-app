import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage implements OnInit {

  showComentarios = true;

  constructor() { }

  ngOnInit() {
  }

    segmentChanged($event) {
      if ($event.detail.value === 'comentarios') {
        this.showComentarios = true;
      } else {
        this.showComentarios = false;
      }
    }
}
