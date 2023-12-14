import { create } from 'zustand'
import { ItemInCart } from '../redux/features/cart/cartSlice';

interface BuyState {
  item: ItemInCart,
  increaseNumberOfItem: (count: number) => void,
  decreaseNumberOfItem: (count: number) => void,
  resetCounter: () => void,
}

const useBuy = create<BuyState>()((set) => ({
  item: {
    name: "Fall Limited Edition Sneakers",
    unitaryPrice: 125.0,
    count: 0.
  },
  increaseNumberOfItem: (count: number) => set((state: BuyState) => ({ item: {...state.item, count: state.item.count + count}
  })),
  decreaseNumberOfItem: (count: number) => set((state: BuyState) => ({
    item: {...state.item, count: state.item.count === 0 ? 0 : state.item.count - count}
  })),
  resetCounter: () => set((state: BuyState) => ({
    item: {...state.item, count: state.item.count = 0}
  })),
}))

export default useBuy;