import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {IMeal, IMealStore} from "./meals.reducer.";
import {setMealsLoading, updateMeals} from "./meals.actions";

@Injectable({providedIn: 'root'})
export class MealService {
  constructor(private http: HttpClient, private store: Store<IMealStore>) {
  }

  loadMeals() {
    this.store.dispatch(setMealsLoading({value: true}))
    this.http.get<IMeal[]>('http://localhost:3000/meals').subscribe((resp) => {
      this.store.dispatch(updateMeals({value: resp}))
      this.store.dispatch(setMealsLoading({value: false})),
        (error: string) => {
          this.store.dispatch(setMealsLoading({value: false}))
          alert(error)
        }
    })
  }
}

