import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhePerguntaPage } from './detalhe-pergunta.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhePerguntaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhePerguntaPageRoutingModule {}
