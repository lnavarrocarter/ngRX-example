import { ProductoService } from './../../../services/producto.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoadProductos, PRODUCTO_ACTIONS } from './producto.action';
import { Injectable } from "@angular/core";
import { catchError, map, mergeMap, of } from 'rxjs';


@Injectable()
export class ProductoEffects {

  LoadProductos$ = createEffect(() => this.actions$.pipe(
    ofType(PRODUCTO_ACTIONS.INIT_PRODUCTOS),
    mergeMap( () => this.ProdServ.getProducto()
      .pipe(
        map(pl => ({type : PRODUCTO_ACTIONS.LOAD_PRODUCTOS, data: pl})),
        catchError(() => of({type : 'ERROR'})))
      )
    ),
  );

  constructor(
    private actions$: Actions,
    private ProdServ: ProductoService
    ) {}

}
