import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {ICart} from '../../store/cart/cart.reducer';
import {selectCartData} from '../../store/cart/meals.selectors';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {addToCart, removeFromCart} from '../../store/cart/cart.actions';
import {Observable} from 'rxjs';
import {BaseContentCenterComponent} from "../../base-content-center/base-content-center.component";

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule, BaseContentCenterComponent],
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent {
  cart$: Observable<ICart[]> = this.store.select(selectCartData);

  constructor(private store: Store) {
  }


  onAddToCart(id: string) {
    this.store.dispatch(addToCart({value: id}));
  }

  onRemoveFromCart(id: string) {
    this.store.dispatch(removeFromCart({value: id}));
  }
}

