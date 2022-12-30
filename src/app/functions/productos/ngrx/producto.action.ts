import { createAction, props } from '@ngrx/store';

export enum PRODUCTO_ACTIONS {
  INIT_PRODUCTOS = '[PRODUCTO] Init Productos',
  LOAD_PRODUCTOS = '[PRODUCTO] Load Productos',
};


export const LoadProductos = createAction(
  PRODUCTO_ACTIONS.LOAD_PRODUCTOS, props<{ data: any }>
);

export const InitProductos = createAction(
  PRODUCTO_ACTIONS.INIT_PRODUCTOS
);
