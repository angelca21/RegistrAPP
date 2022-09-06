import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cerrarse',
  templateUrl: './cerrarse.page.html',
  styleUrls: ['./cerrarse.page.scss'],
})
export class CerrarsePage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

}
