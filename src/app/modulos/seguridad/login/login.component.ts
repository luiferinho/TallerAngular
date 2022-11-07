import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { SeguridadModule } from '../seguridad.module';
const cryptoJS = require ("crypto-js");

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'usuario': ['',[Validators.required, Validators.email]],
    'clave':['',[Validators.required, Validators.minLength(4)]]
  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad : SeguridadService, private router : Router) { }

  ngOnInit(): void {  
  }
  identificarUsuario(){
    let usuario=this.fgValidador.controls['usuario'].value;
    let clave=this.fgValidador.controls['clave'].value;
    let claveCifrada= cryptoJS.MD5(clave).toString();
    //alert(claveCifrada)
    this.servicioSeguridad.identificar(usuario,claveCifrada).subscribe((datos:any)=> {
      //ok
      this.servicioSeguridad.AlmacenarSesion(datos);
      alert("datos correctos")
      this.router.navigate(['/inicio']);
    },(error:any)=>{
      //ko
      alert("datos incorrectos")
    })

  }

}
