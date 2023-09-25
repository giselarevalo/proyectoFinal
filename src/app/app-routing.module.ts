import { NgModule } from '@angular/core';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';




const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'perro',
    loadChildren: () => import('./pages/perro/perro.module').then( m => m.PerroPageModule)
  },
  {
    path: 'armadura',
    loadChildren: () => import('./pages/armadura/armadura.module').then( m => m.ArmaduraPageModule)
  },
  {
    path: 'pizarron',
    loadChildren: () => import('./pages/pizarron/pizarron.module').then( m => m.PizarronPageModule)
  },
  {
    path: 'piedra',
    loadChildren: () => import('./pages/piedra/piedra.module').then( m => m.PiedraPageModule)
  },
  {
    path: 'computadora',
    loadChildren: () => import('./pages/computadora/computadora.module').then( m => m.ComputadoraPageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
