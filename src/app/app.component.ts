import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[] = [ 
    {
      icon: 'information-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    {
      icon: 'qr-code-outline',
      name: 'Codigo',
      redirecTo: '/codigo',
    },
    {
      icon: 'scan-outline',
      name: 'Escanear codigo',
      redirecTo: '/escanearco',
    },
    {
      icon: 'help-circle-outline',
      name: 'Introducción',
      redirecTo: '/introduccion',
    },
    {
      icon: 'log-out-outline',
      name: 'Cerrar sesión',
      redirecTo: '/inciarse',
    },
 
  ];
}
