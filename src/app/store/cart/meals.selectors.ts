import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ICartStore} from "./cart.reducer";

const selectCart = createFeatureSelector<ICartStore>('cart');
export const selectCartData = createSelector(
  selectCart,
  (state: ICartStore) => state.cart
);


