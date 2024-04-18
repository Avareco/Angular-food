import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {ICart, ICartStore} from "./cart.reducer";
import {setCart} from "./cart.actions";
import {catchError, throwError} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({providedIn: 'root'})
export class CartService {
  constructor(private http: HttpClient, private store: Store<ICartStore>) {
  }


  loadCart() {
    this.http.get<ICart[]>('http://localhost:3000/cart').pipe(
      catchError((error) => {
        alert(error.statusText)
        return throwError(() => new Error('An error occurred while loading cart.'));
      })
    ).subscribe((resp) => {
      this.store.dispatch(setCart({value: resp}));
    });
  }

  updateCart(cart: ICart[]) {
    this.http.post<ICart[]>('http://localhost:3000/cart', cart).pipe(
      catchError((error) => {
        alert(error.statusText)
        return throwError(() => new Error('An error occurred while updating cart.'));
      })
    ).subscribe();
  }
}
