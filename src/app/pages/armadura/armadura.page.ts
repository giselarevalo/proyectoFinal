import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armadura', /* Alias del componente */
  templateUrl: './armadura.page.html',
  styleUrls: ['./armadura.page.scss'],
})
export class ArmaduraPage implements OnInit {


  pageName = 'Armadura';
  headerColor: string = 'secondary';
  constructor() { }

  ngOnInit() {
  }

}
