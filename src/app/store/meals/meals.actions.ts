import {createAction, props} from "@ngrx/store";
import {IMeal} from "./meals.reducer.";

export enum MEALS_ACTIONS {
  UPDATE = "[Meals] updateMeals",
  SET_LOADING = "[Meals] setLoading"
}


export const setMeals = createAction(
  MEALS_ACTIONS.UPDATE,
  props<{ value: IMeal[] }>()
)

export const setMealsLoading = createAction(
  MEALS_ACTIONS.SET_LOADING,
  props<{ value: boolean }>()
)
