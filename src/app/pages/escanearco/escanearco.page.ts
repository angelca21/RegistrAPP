import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-escanearco',
  templateUrl: './escanearco.page.html',
  styleUrls: ['./escanearco.page.scss'],
})
export class EscanearcoPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}
