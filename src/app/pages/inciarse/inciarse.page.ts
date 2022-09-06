import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inciarse',
  templateUrl: './inciarse.page.html',
  styleUrls: ['./inciarse.page.scss'],
})
export class InciarsePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario={
    user:'',
    password:'',
  }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
