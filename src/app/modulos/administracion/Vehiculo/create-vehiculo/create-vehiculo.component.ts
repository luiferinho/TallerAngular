import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-create-vehiculo',
  templateUrl: './create-vehiculo.component.html',
  styleUrls: ['./create-vehiculo.component.css']
})
export class CreateVehiculoComponent implements OnInit {

  datos= [];
  formVehi: FormGroup = new FormGroup({});
  constructor(
    private servicioCrud: CrudService,
    private fb: FormBuilder,
    private router : Router
  ) {
    this.formVehi = this.fb.group({
      Placa: [''],
      Marca: [''],
      Tipo: [''],
      Modelo: [''],
      Pasajeros: [''],
      Cilindraje: [''],
      PaisOrigen: [''],
      Caracteristicas: [''],
      propietarioId: ['']
    });
   }

   saveUser(): void {
    const datosvehi = this.formVehi.getRawValue();
    console.log(datosvehi);

    this.servicioCrud
      .postData('vehis',JSON.stringify(datosvehi))
      .subscribe({
        next: (data) => {
          console.log(data);
          alert(' Vehiculo almacenado correctamente')
          this.router.navigate(['/administracion/read-vehiculo'])
          //this.getUsers();
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }  


  ngOnInit(): void {
  }

}
