import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: componente[] = [
    {
      icon:'qr-code-outline',
      name:'codigo',
      redirecTo:'/codigo',
    },

  ];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

}
