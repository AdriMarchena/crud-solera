import { Component, Input, OnChanges } from '@angular/core';
import { Service } from '../interfaces/services.interface';
import { listServices } from '../constants/db.constants';

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnChanges {
  services: Service[] = [];
  objService: Service = {
    codService: 0,
    codSector: 0,
    name: '',
    description: ''
  };

  showForm: boolean = false;
  showAlertSuccess: boolean = false;
  textAlert: string = '';

  // Inputs
  @Input() codSector: number = 0;

  constructor() {
  }

  ngOnChanges() {
    this.list();
  }

  list(): void {
    this.services = [];
    if (this.codSector !== 0) {
      this.services = listServices.filter(ele => {
        return ele.codSector === this.codSector
      })
    } else {
      this.services = listServices;
    }
  }

  onCodService(obj: Service) {
    this.objService = obj;
  }

  onShowForm(show: boolean) {
    this.showForm = show;
  }

  onShowAlert(codAlert: boolean) {
    this.showAlertSuccess = codAlert;
    setTimeout(() => {
      this.showAlertSuccess = false;
    }, 1000);
    this.list();
  }

  onDelete() {
    this.list();
  }
}
