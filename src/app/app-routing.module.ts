import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/producto', pathMatch: 'full' },
  {
    path: 'producto', loadChildren: () =>
      import('./functions/productos/productos.module')
        .then(m => m.ProductosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
