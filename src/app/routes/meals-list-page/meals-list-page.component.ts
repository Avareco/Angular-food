import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from "@ngrx/store";
import {IMeal, IMealStore} from "../../store/meals/meals.reducer.";
import {Observable} from "rxjs";
import {selectIsLoading, selectMealsData} from "../../store/meals/meals.selectors";
import {FoodListItemComponent} from "../meal-page/meal-list-item/meal-list-item.component";

@Component({
  selector: 'app-meals-list-page',
  standalone: true,
  imports: [CommonModule, FoodListItemComponent],
  templateUrl: './meals-list-page.component.html',
})
export class MealsListPageComponent {
  meals$: Observable<IMeal[]> = this.store.select(selectMealsData)
  isMealsLoading$: Observable<boolean> = this.store.select(selectIsLoading)

  constructor(private store: Store<IMealStore>,) {
  }


}
