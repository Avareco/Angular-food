import {Component, OnInit} from '@angular/core';


import {AppHeaderComponent} from "./app-header/app-header.component";
import {MealsListPageComponent} from "./routes/meals-list-page/meals-list-page.component";
import {RouterOutlet} from "@angular/router";
import {MealService} from "./store/meals/meal.service";
import {CartService} from "./store/cart/cart.service";
import {BaseContentCenterComponent} from "./base-content-center/base-content-center.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [AppHeaderComponent, MealsListPageComponent, RouterOutlet, BaseContentCenterComponent],
})
export class AppComponent implements OnInit {
  constructor(private mealsService: MealService, private cartService: CartService) {
  }

  ngOnInit() {
    this.mealsService.loadMeals()
    this.cartService.loadCart()
  }
}
