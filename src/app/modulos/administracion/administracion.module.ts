import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdministracionRoutingModule } from './administracion-routing.module';
import { CreatePropietarioComponent } from './propieaterio/create-propietario/create-propietario.component';
import { ReadPropietarioComponent } from './propieaterio/read-propietario/read-propietario.component';
import { UpdatePropietarioComponent } from './propieaterio/update-propietario/update-propietario.component';
import { DeletePropietarioComponent } from './propieaterio/delete-propietario/delete-propietario.component';
import { CreateMecanicoComponent } from './mecanico/create-mecanico/create-mecanico.component';
import { ReadMecanicoComponent } from './mecanico/read-mecanico/read-mecanico.component';
import { UpdateMecanicoComponent } from './mecanico/update-mecanico/update-mecanico.component';
import { DeleteMecanicoComponent } from './mecanico/delete-mecanico/delete-mecanico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { CreateVehiculoComponent } from './Vehiculo/create-vehiculo/create-vehiculo.component';
import { ReadVehiculoComponent } from './Vehiculo/read-vehiculo/read-vehiculo.component';


@NgModule({
  declarations: [

    CreatePropietarioComponent,
    ReadPropietarioComponent,
    UpdatePropietarioComponent,
    DeletePropietarioComponent,
    CreateMecanicoComponent,
    ReadMecanicoComponent,
    UpdateMecanicoComponent,
    DeleteMecanicoComponent,
    CreateVehiculoComponent,
    ReadVehiculoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class AdministracionModule { }
