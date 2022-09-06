import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',                     
    redirectTo: 'inciarse',
    pathMatch: 'full'
  },
  {
    path: 'inciarse',
    loadChildren: () => import('./pages/inciarse/inciarse.module').then( m => m.InciarsePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'codigo',
    loadChildren: () => import('./pages/codigo/codigo.module').then( m => m.CodigoPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
 
  {
    path: 'introduccion',
    loadChildren: () => import('./pages/introduccion/introduccion.module').then( m => m.IntroduccionPageModule)
  },
  {
    path: 'cerrarse',
    loadChildren: () => import('./pages/cerrarse/cerrarse.module').then( m => m.CerrarsePageModule)
  },
  {
    path: 'reestpas',
    loadChildren: () => import('./pages/reestpas/reestpas.module').then( m => m.ReestpasPageModule)
  },
  {
    path: 'cambiarpas',
    loadChildren: () => import('./pages/cambiarpas/cambiarpas.module').then( m => m.CambiarpasPageModule)
  },
  {
    path: 'escanearco',
    loadChildren: () => import('./pages/escanearco/escanearco.module').then( m => m.EscanearcoPageModule)
  },
  {
    path: 'asistiempo',
    loadChildren: () => import('./pages/asistiempo/asistiempo.module').then( m => m.AsistiempoPageModule)
  },
  {
    path: 'listaasis',
    loadChildren: () => import('./pages/listaasis/listaasis.module').then( m => m.ListaasisPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
