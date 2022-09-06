import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.page.html',
  styleUrls: ['./introduccion.page.scss'],
})
export class IntroduccionPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu()
  {
    this.menuController.open('first');
  }


}
