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


@NgModule({
  declarations: [
    CreatePropietarioComponent,
    ReadPropietarioComponent,
    UpdatePropietarioComponent,
    DeletePropietarioComponent,
    CreateMecanicoComponent,
    ReadMecanicoComponent,
    UpdateMecanicoComponent,
    DeleteMecanicoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
