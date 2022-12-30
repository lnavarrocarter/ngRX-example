import { ProductComponent } from './producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductoComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home', component: ProductComponent },
  { path: 'table', component: ListProductoComponent },
  { path: 'create', component: CreateComponent },
  { path: '**', redirectTo: '/table'}
];

@NgModule({
  id : 'ProductoRoutingModule',
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
