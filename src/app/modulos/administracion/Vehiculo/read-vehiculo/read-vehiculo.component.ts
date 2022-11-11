import { Component, OnInit,VERSION, ViewChild, ElementRef } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';




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
  objet : any = [];
  formvehis: FormGroup = new FormGroup({});





/* 
  getId(inputvalue:string) {
  this.servicioBack.getVehi(inputvalue).subscribe(
    (data) => {
      this.formvehis = data;
    },

    (error) => {
      console.log(error);
      this.dataSource = [];
    }
  );
  
  
  
  
}; */

  constructor( private servicioBack: CrudService,    
    private fb: FormBuilder,
    ) {
    this.servicioBack.getData("vehis").subscribe(
      (data) => {
        this.dataSource = data;
      },

      (error) => {
        console.log(error);
        this.dataSource = [];
      }
    );
   /*  this.formvehis = this.fb.group({
      Placa: [''],
      Marca: [''],
      Tipo: [''],
      Modelo: [''],
      Cilindraje: [''],
      propietarioId: [''],
    });
   
 */





   }
   
   



  ngOnInit(): void {
  }

}
