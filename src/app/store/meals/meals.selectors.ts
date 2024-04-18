import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IMealStore} from "./meals.reducer.";

const selectMeals = createFeatureSelector<IMealStore>('meals');
export const selectMealsData = createSelector(
  selectMeals,
  (state: IMealStore) => state.meals
);

export const selectIsLoading = createSelector(
  selectMeals,
  (state: IMealStore) => state.isLoading
);
export const selectMealById = (id: string) => createSelector(
  selectMeals,
  (state: IMealStore) => state.meals.find(meal => meal.id === id)
);
