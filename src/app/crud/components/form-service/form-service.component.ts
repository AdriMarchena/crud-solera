import { Component, Input, OnChanges, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service } from 'src/app/interfaces/services.interface';
import { listServices } from '../../../constants/db.constants';

@Component({
  selector: 'form-service',
  templateUrl: './form-service.component.html',
  styleUrls: ['./form-service.component.css'],
})
export class FormServiceComponent implements OnChanges {

  // Inputs
  @Input() objService: Service = {
    codService: 0,
    codSector: 0,
    name: '',
    description: ''
  };
  @Input() codSector: number = 0;


  // Outputs
  @Output() onShowForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onShowAlert: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onUpdate: EventEmitter<boolean> = new EventEmitter<boolean>();

  form: FormGroup = this.fb.group({
    codService: [],
    codSector: [],
    name: [, [Validators.required]],
    description: [, [Validators.required]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnChanges() {
    this.form.patchValue({
      codService: this.objService.codService,
      codSector: this.objService.codSector,
      name: this.objService.name,
      description: this.objService.description
    });
  }

  campoEsValido(campo: string) {
    return this.form.controls[campo].errors
      && this.form.controls[campo].touched;
  }

  saveService() {
    if (!this.form.invalid) {
      listServices.forEach(ele => {
        if (ele.codService === this.objService.codService) {
          ele.codService = this.form.get('codService')?.value;
          ele.codSector = this.form.get('codSector')?.value;
          ele.name = this.form.get('name')?.value;
          ele.description = this.form.get('description')?.value;
        }
      })
      this.cancelService();
      this.onShowAlert.emit(true);
    }
  }

  cancelService() {
    this.onShowForm.emit(false);
  }

}
