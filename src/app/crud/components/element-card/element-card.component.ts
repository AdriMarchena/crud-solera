import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Service } from 'src/app/interfaces/services.interface';
import { listServices } from '../../../constants/db.constants';

@Component({
  selector: 'element-card',
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.css'],
})
export class ElementCardComponent{

  // Inputs
  @Input() objService: Service = {
    codService: 0,
    codSector: 0,
    name: '',
    description: ''
  };

  // Outputs
  @Output() onCodService:EventEmitter<Service> = new EventEmitter<Service>();
  @Output() onShowForm:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onDelete: EventEmitter<boolean> = new EventEmitter<boolean>();

  getCodService() {
    this.onCodService.emit(this.objService);
    this.onShowForm.emit(true);
  }

  deleteService() {
    let pos = listServices.indexOf(this.objService);
    listServices.splice(pos,1);
    this.onDelete.emit(true);
  }

}
