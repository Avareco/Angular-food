import {createReducer, on} from "@ngrx/store";
import {addToCart, removeFromCart, setCart} from "./cart.actions";

export interface ICart {
  id: string,
  count: number
}

export interface ICartStore {
  cart: ICart[]
}

const initialState: ICartStore = {
  cart: [],
}
export const cartReducer = createReducer(initialState,
  on(setCart, (state, action) =>
    ({...state, cart: action.value})
  ),
  on(addToCart, (state, action) => {
    const cartMealIndex = state.cart.findIndex((item) => item.id === action.value)

    if (cartMealIndex >= 0) {
      const updatedCart = state.cart.map(item =>
        item.id === action.value
          ? {...item, count: item.count + 1}
          : item
      );
      return {...state, cart: updatedCart};
    }

    return {...state, cart: [...state.cart, {id: action.value, count: 1}]}
  }),
  on(removeFromCart, (state, action) => {
    const cartMeal = state.cart.find((item) => item.id === action.value)

    if (cartMeal?.count !== 1) {
      const updatedCart = state.cart.map(item =>
        item.id === action.value
          ? {...item, count: item.count - 1}
          : item
      );
      return {...state, cart: updatedCart};
    }

    return {
      ...state, cart: state.cart.filter((item) => item.id !== action.value)
    }
  })
)
