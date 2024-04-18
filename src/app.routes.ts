import {Routes} from "@angular/router";
import {MealPageComponent} from "./app/routes/meal-page/meal-page.component";
import {MealsListPageComponent} from "./app/routes/meals-list-page/meals-list-page.component";
import {CartPageComponent} from "./app/routes/cart-page/cart-page.component";

export const APP_ROUTES: Routes = [
  {
    path: '', redirectTo: '/meals', pathMatch: 'full'
  },
  {
    path: 'cart', component: CartPageComponent
  },
  {
    path: 'meals', component: MealsListPageComponent,
  },
  {
    path: 'meals/:id', component: MealPageComponent
  },
];
