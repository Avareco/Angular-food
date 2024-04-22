import {createReducer, on} from "@ngrx/store";
import {setMealsLoading, setMeals} from "./meals.actions";

export interface IMeal {
  id: string,
  name: string,
  price: string,
  description: string,
  image: string
}

export interface IMealStore {
  isLoading: boolean,
  meals: IMeal[]
}

const initialState: IMealStore = {
  meals: [],
  isLoading: false
}
export const mealsReducer = createReducer(initialState,
  on(setMeals, (state, action) =>
    ({...state, meals: action.value})
  ),
  on(setMealsLoading, (state, action) =>
    ({...state, isLoading: action.value})
  )
)
