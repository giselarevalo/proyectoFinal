import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.page.html',
  styleUrls: ['./perro.page.scss'],
})
export class PerroPage implements OnInit {

  pageName = 'Perro';
  HeaderColor: string = 'secondary';

  constructor() { }

  ngOnInit() {
  }
  

}
