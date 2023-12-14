import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type ItemInCart = {
  name: string;
  unitaryPrice: number;
  count: number;
}

interface ItemsInCartState {
  items: ItemInCart[];
}

const initialState: ItemsInCartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemInCart: (state, action: PayloadAction<ItemInCart>) => {
      const itemAlsoExists = state.items.find(item => item.name === action.payload.name);

      if (itemAlsoExists) {
        state.items.forEach(item => {
          if (item.name === itemAlsoExists.name) {
            item.count += action.payload.count;
          }
        })

        return;
      }

      state.items.push(action.payload);
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    }
  }
})

export const { addItemInCart, removeItemFromCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;