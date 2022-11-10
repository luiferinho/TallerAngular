import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-create-mecanico',
  templateUrl: './create-mecanico.component.html',
  styleUrls: ['./create-mecanico.component.css']
})
export class CreateMecanicoComponent implements OnInit {


  datos = [];

  formMecanico: FormGroup = new FormGroup({});

  constructor(
    private servicioCrud: CrudService,
    private fb: FormBuilder,
    private router : Router
  ) {

    this.formMecanico = this.fb.group({
      Nombre: [''],
      Apellidos: [''],
      NumeroTelefono: [''],
      FechaNacimiento: [''],
      Correo: [''],
      Direccion: [''],
      NivelEstudio: [''],
    
    });
   }
   saveMechanico(): void {
    const datosMecanico = this.formMecanico.getRawValue();
    console.log(datosMecanico);

    this.servicioCrud
      .postData('mecanicos',JSON.stringify(datosMecanico))
      .subscribe({
        next: (data) => {
          console.log(data);
          alert(' Mecanico almacenado correctamente')
          this.router.navigate(['/administracion/read-mecanico'])
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
