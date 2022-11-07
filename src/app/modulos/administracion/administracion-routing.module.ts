import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMecanicoComponent } from './mecanico/create-mecanico/create-mecanico.component';
import { DeleteMecanicoComponent } from './mecanico/delete-mecanico/delete-mecanico.component';
import { ReadMecanicoComponent } from './mecanico/read-mecanico/read-mecanico.component';
import { UpdateMecanicoComponent } from './mecanico/update-mecanico/update-mecanico.component';
import { CreatePropietarioComponent } from './propieaterio/create-propietario/create-propietario.component';
import { DeletePropietarioComponent } from './propieaterio/delete-propietario/delete-propietario.component';
import { ReadPropietarioComponent } from './propieaterio/read-propietario/read-propietario.component';
import { UpdatePropietarioComponent } from './propieaterio/update-propietario/update-propietario.component';

const routes: Routes = [
  //ROUTING PROPIETARIO
  {
    path:"create-propietario",
    component: CreatePropietarioComponent
  },
  {
    path:"read-propietario",
    component: ReadPropietarioComponent
  },
  {
    path:"update-propietario",
    component: UpdatePropietarioComponent
  },
  {
    path:"delete-propietario",
    component: DeletePropietarioComponent
  },
  //ROUTING MECANICO
  {
    path:"create-mecanico",
    component: CreateMecanicoComponent
  },
  {
    path:"read-mecanico",
    component: ReadMecanicoComponent
  },
  {
    path:"update-mecanico",
    component: UpdateMecanicoComponent
  },
  {
    path:"delete-mecanico",
    component: DeleteMecanicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
