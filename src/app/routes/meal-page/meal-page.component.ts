import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IMeal, IMealStore} from "../../store/meals/meals.reducer.";
import {Store} from "@ngrx/store";
import {selectMealById} from "../../store/meals/meals.selectors";
import {JsonPipe} from "@angular/common";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-meal-page',
  templateUrl: './meal-page.component.html',
  imports: [
    JsonPipe
  ],
  standalone: true
})
export class MealPageComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private store: Store<IMealStore>) {
  }

  meal$: Subscription = new Subscription();
  currentMeal: IMeal = {id: "", description: "", image: "", name: "", price: ""}

  ngOnInit() {
    const mealId = this.route.snapshot.params['id']
    this.meal$ = this.store.select(selectMealById(mealId)).subscribe((meal) => {
      if (!meal) {
        return
      }

      this.currentMeal = meal
    })
  }

  ngOnDestroy() {
    this.meal$.unsubscribe()
  }

}
