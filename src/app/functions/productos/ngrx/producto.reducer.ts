import { Action, createReducer, on } from '@ngrx/store';
import { LoadProductos, PRODUCTO_ACTIONS } from './producto.action';


export interface ProductState {
  list: any[]
};

export const InitState = {
  list : []
};


export const _ProductoReducer = createReducer(
  InitState,
  on(LoadProductos, (state,action) => _loadProductos(state, action)),
  //Agregar las nuevas acciones que modique el state

);

export function ProductoReducer(state : any, action : Action) {
  return _ProductoReducer(state, action);
}


function _loadProductos(state : any, action: any) {
  return {
    ...state,
    list: action.data
  }
}
