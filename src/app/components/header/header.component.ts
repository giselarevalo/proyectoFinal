import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() pageTitle: string = '';
  @Input() headerColor: string = '';

  constructor() { }

  ngOnInit() {} // este evento arranca cuando se inicia

}
