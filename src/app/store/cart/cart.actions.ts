import {createAction, props} from "@ngrx/store";
import {ICart} from "./cart.reducer";

export enum CART_ACTIONS {
  SET_CART = "[Cart] setCart",
  REMOVE_FROM_CART = "[Cart] removeFromCart",
  ADD_TO_CART = "[Cart] addToCart",
}


export const addToCart = createAction(
  CART_ACTIONS.ADD_TO_CART,
  props<{ value: string }>()
)

export const removeFromCart = createAction(
  CART_ACTIONS.REMOVE_FROM_CART,
  props<{ value: string }>()
)

export const setCart = createAction(
  CART_ACTIONS.SET_CART,
  props<{ value: ICart[] }>()
)


