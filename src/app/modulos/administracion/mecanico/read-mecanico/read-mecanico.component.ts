import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';


@Component({
  selector: 'app-read-mecanico',
  templateUrl: './read-mecanico.component.html',
  styleUrls: ['./read-mecanico.component.css']
})
export class ReadMecanicoComponent implements OnInit {

  displayedColums : string [] = [
  
    "Nombre",
    "Apellidos",
    "NumeroTelefono",
    "Correo",

  ];
  dataSource : any = [];


  constructor(private servicioBack: CrudService) {
    this.servicioBack.getData("mecanicos").subscribe(
      (data) => {
        this.dataSource = data;
      },

      (error) => {
        console.log(error);
        this.dataSource = [];
      }

    );
   }

  ngOnInit(): void {
  }

}
