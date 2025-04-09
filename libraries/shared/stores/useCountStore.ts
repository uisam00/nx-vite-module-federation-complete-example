import { create } from 'zustand';

// Define the type for the store state and actions
interface CountState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

// Create the store with typed state and actions
export const useCountStore = create<CountState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));
