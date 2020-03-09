import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'app',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'app/cadastrar/pergunta',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/discussoes/pages/nova-pergunta/nova-pergunta.module').then( m => m.NovaPerguntaPageModule)
  },
  {
    path: 'app/pergunta/:id',
    loadChildren: () => import('./pages/discussoes/pages/detalhe-pergunta/detalhe-pergunta.module').then( m => m.DetalhePerguntaPageModule)
  },
  {
    path: 'app/hospital/:id',
    loadChildren: () => import('./pages/hospitais/pages/hospital/hospital.module').then( m => m.HospitalPageModule)
  },
  {
    path: 'app/cadastrar/ocorrencia',
    loadChildren: () => import('./pages/ocorrencias/pages/nova-ocorrencia/nova-ocorrencia.module').then( m => m.NovaOcorrenciaPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
