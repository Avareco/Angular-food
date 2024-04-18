import {Actions, createEffect, ofType} from "@ngrx/effects";
import {tap, withLatestFrom} from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectCartData} from "./meals.selectors";
import {ICartStore} from "./cart.reducer";
import {CartService} from "./cart.service";
import {addToCart, removeFromCart} from "./cart.actions";

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions,
              private store: Store<{
                cartReducer: ICartStore
              }>,
              private cartService: CartService) {
  }

  saveCart = createEffect(() => this.actions$.pipe(
    ofType(addToCart, removeFromCart),
    withLatestFrom(this.store.select(selectCartData)),
    tap(([action, store]) => {
      this.cartService.updateCart(store)
    })
  ), {dispatch: false})


}
