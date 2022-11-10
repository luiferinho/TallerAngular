import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';



@Component({
  selector: 'app-read-vehiculo',
  templateUrl: './read-vehiculo.component.html',
  styleUrls: ['./read-vehiculo.component.css']
})
export class ReadVehiculoComponent implements OnInit {
  
  displayedColums : string [] = [
  
    "Placa",
    "Marca",
    "Tipo",
    "Modelo",
    "Cilindraje",
    "propietarioId"

  ];
  dataSource : any = [];

  constructor( private servicioBack: CrudService) {
    this.servicioBack.getData("vehis").subscribe(
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
