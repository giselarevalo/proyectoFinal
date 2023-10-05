import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.page.html',
  styleUrls: ['./directivas.page.scss'],
})
export class DirectivasPage implements OnInit {
  cities = ['Barcelona','Madrid','Lima','Argentina','Ciudad Gotica']
  name! : string
  
  constructor() { }

  ngOnInit() {
  }

}
