import { Component, Output, EventEmitter } from '@angular/core';
import { listSectors } from '../constants/db.constants';
import { Sector } from '../interfaces/sectors.interface';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  sectors: Sector[] = [];

  // Outputs
  @Output() onSector: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.sectors = listSectors;
  }

  getSector( sector: number ) {
    this.activeNavbar(sector);
    this.onSector.emit(sector);
  }

  activeNavbar(sector: number) {
    let nameClass;
    for(let i=0; i<listSectors.length; i++){
      nameClass = document.getElementById((listSectors[i].codSector).toString());
      nameClass?.classList.remove("active");
    }
    nameClass = document.getElementById(sector.toString());
    nameClass?.classList.add("active");
  }
}
