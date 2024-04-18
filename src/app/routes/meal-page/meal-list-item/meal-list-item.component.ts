import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {IMeal} from "../../../store/meals/meals.reducer.";
import {RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {addToCart} from "../../../store/cart/cart.actions";
import {ICartStore} from "../../../store/cart/cart.reducer";
import {ClickStopPropagation} from "../../../directives/stop-propagination.directive";

@Component({
  selector: 'app-meals-list-page-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterLink, ClickStopPropagation],
  templateUrl: './meal-list-item.component.html',
  styleUrls: ['./meal-list-item.component.css']
})
export class FoodListItemComponent {
  @Input() meal!: IMeal

  constructor(private store: Store<ICartStore>) {
  }

  onAddToCart() {
    this.store.dispatch(addToCart({value: this.meal.id}))
  }
}
