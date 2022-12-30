import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductoComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { ProductoRoutingModule } from './productos.router';
import { MatTableModule } from '@angular/material/table';
import { ProductComponent } from './producto.component';



@NgModule({
  declarations: [
    ListProductoComponent,
    CreateComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatTableModule,
  ]
})
export class ProductosModule { }
