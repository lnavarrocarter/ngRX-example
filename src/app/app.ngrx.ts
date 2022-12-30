import { ActionReducerMap } from '@ngrx/store';
import * as ProductRedux from './functions/productos/ngrx';

export interface ReduxStore {
  Productos: ProductRedux.ProductState
  //aca agrego los states de las demas funciones
}

export const reducers: ActionReducerMap<ReduxStore> = {
  Productos : ProductRedux.ProductoReducer
  //aca agrego los reducers de las demas funciones
};

export {
  ProductRedux
  //aca agrego los exports de las demas funciones
}

