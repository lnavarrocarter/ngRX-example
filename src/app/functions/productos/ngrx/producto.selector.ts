import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./producto.reducer";

export const GetProductState = createFeatureSelector<ProductState>('Productos');

const getProductList = (state: ProductState) => state.list;

export const GetProductList = createSelector(GetProductState, getProductList)


