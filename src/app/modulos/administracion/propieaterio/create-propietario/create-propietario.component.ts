import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ModeloPropietario } from 'src/app/modelos/propietario.modelo';
import { PropietarioService } from 'src/app/servicios/propietario.service';
//import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-propietario',
  templateUrl: './create-propietario.component.html',
  styleUrls: ['./create-propietario.component.css']
})
export class CreatePropietarioComponent implements OnInit {

  /*fgValidador: FormGroup = this.fb.group({
    'Nombre': ['',[Validators.required]],
    'Apellidos': ['',[Validators.required]],
    'NumeroTelefono': ['',[Validators.required]],
    'FechaNacimiento': ['',[Validators.required]],
    'CiudadResidencia': ['',[Validators.required]],
    'Correo': ['',[Validators.required]],
  })*/
  datos= [];
  formUser: FormGroup = new FormGroup({});

  /*constructor(private fb: FormBuilder,
    private servicioPropietario: PropietarioService,
    private router : Router) { }*/
    constructor(
      private servicioBackend: PropietarioService,
      private fb: FormBuilder,
      private router : Router
    ) {
      //this.getUsers();
  
      this.formUser = this.fb.group({
        Nombre: [''],
        Apellidos: [''],
        NumeroTelefono: [''],
        FechaNacimiento: [''],
        CiudadResidencia: [''],
        Correo: [''],
      });
    }

    saveUser(): void {
      const datosUser = this.formUser.getRawValue();
      console.log(datosUser);
  
      this.servicioBackend
        .postData(JSON.stringify(datosUser))
        .subscribe({
          next: (data) => {
            console.log(data);
            alert(' Propietario almacenado correctamente')
            this.router.navigate(['/administracion/read-propietario'])
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
  /*guardarPropietario(){
    let nombre = this.fgValidador.controls['Nombre'].value;
    let apellidos = this.fgValidador.controls['Apellidos'].value;
    let numeroTelefono = parseInt(this.fgValidador.controls['NumeroTelefono'].value);
    let fechaNacimiento = this.fgValidador.controls['FechaNacimiento'].value;
    let ciudadResidencia = this.fgValidador.controls['CiudadResidencia'].value;
    let correo = this.fgValidador.controls['Correo'].value;

    let p = new ModeloPropietario();
    p.Nombre= nombre;
    p.Apellidos= apellidos;
    p.NumeroTelefono= numeroTelefono;
    p.FechaNacimiento= fechaNacimiento;
    p.CiudadResidencia= ciudadResidencia;
    p.Correo= correo;
    this.servicioPropietario.CrearPropietario(p).subscribe((datos:ModeloPropietario)=>{
      alert(' Propietario almacenado correctamente')
      this.router.navigate(['/administracion/read-propitario'])
    },(error:any)=>{
      alert('Error al almacenar Propietario')

    } )
  }*/
