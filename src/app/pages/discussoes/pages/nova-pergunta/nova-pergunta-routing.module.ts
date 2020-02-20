import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaPerguntaPage } from './nova-pergunta.page';

const routes: Routes = [
  {
    path: '',
    component: NovaPerguntaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaPerguntaPageRoutingModule {}
