import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroclienteComponent } from './cliente/registrocliente/registrocliente.component';
import { ListadoClientesComponent } from './cliente/listado-clientes/listado-clientes.component';

const routes: Routes = [
  { path: 'Registroclientes', component: RegistroclienteComponent },
  { path: 'ListadoClientes', component: ListadoClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
