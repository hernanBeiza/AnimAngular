import { Component, OnInit } from '@angular/core';

import { fadeAnimation, listAnimation } from './animaciones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation, listAnimation]
})
export class AppComponent {
  
  title = 'Animangular';
  public elementos:Array<any> = new Array<any>();
  public estaticos:Array<any> = new Array<any>(1,2,3,4,5,6);

  public flagAnimaIN:boolean = false;

  constructor() {
  }

  ngOnInit(){

  }

  public animaIN():void {
  	this.flagAnimaIN = true;
  	console.log("animaIN");
  }

  public animaOUT():void {
  	this.flagAnimaIN = false;
  	console.log("animaIN");
  }

  public animaListaIN():void {
  	this.elementos.push(1,2,3,4,5);
  }

}


