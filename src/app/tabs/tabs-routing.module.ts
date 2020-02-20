import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {AuthGuardService} from '../shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'discussoes',
        children: [
          {
            path: '',
            canActivate: [AuthGuardService],
            loadChildren: () =>
              import('../pages/discussoes/discussoes.module').then(m => m.DiscussoesPageModule)
          }
        ]
      },
      {
        path: 'hospitais',
        children: [
          {
            path: '',
            canActivate: [AuthGuardService],
            loadChildren: () =>
              import('../pages/hospitais/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'ocorrencias',
        children: [
          {
            path: '',
            canActivate: [AuthGuardService],
            loadChildren: () =>
              import('../pages/ocorrencias/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'preferencias',
        children: [
          {
            path: '',
            canActivate: [AuthGuardService],
            loadChildren: () =>
                import('../pages/preferencias/preferencias.module').then(m => m.PreferenciasPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
