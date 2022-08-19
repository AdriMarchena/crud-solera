import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  codSector: number = 0;

  constructor() { 
  }

  onSector(sector: number) {
    this.codSector = sector;
  }
}
