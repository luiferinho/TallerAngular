import { Component, OnInit } from '@angular/core';
import { ModeloPropietario } from 'src/app/modelos/propietario.modelo';
import { PropietarioService } from 'src/app/servicios/propietario.service';

@Component({
  selector: 'app-read-propietario',
  templateUrl: './read-propietario.component.html',
  styleUrls: ['./read-propietario.component.css']
})
export class ReadPropietarioComponent implements OnInit {

  listadoRegistros : ModeloPropietario[]=[];

  constructor(private propietarioServicio: PropietarioService) { }

  ngOnInit(): void {
    this.ObtenerListadoPropietarios();
    
  }

  ObtenerListadoPropietarios(){
    this.propietarioServicio.ObtenerRegistros().subscribe((datos: ModeloPropietario[])=>{
      this.listadoRegistros=datos;
    })
      
  }

}
