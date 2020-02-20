import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {AuthGuardService} from '../services/auth-guard.service';

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
            loadChildren: () =>
              import('../pages/discussoes/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'hospitais',
        children: [
          {
            path: '',
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
