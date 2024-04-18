import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {selectCartData} from '../store/cart/meals.selectors';
import {ICartStore} from "../store/cart/cart.reducer";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterLink
  ],
  standalone: true
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  itemsCount = 0;
  private cartSubscription: Subscription | undefined;

  constructor(private store: Store<ICartStore>) {
  }

  ngOnInit(): void {
    this.cartSubscription = this.store.select(selectCartData).subscribe((val) => {
      this.itemsCount = val.reduce((acc, item) => acc + item.count, 0);
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
