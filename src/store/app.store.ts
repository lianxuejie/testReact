import { create } from "zustand";
import { immer } from 'zustand/middleware/immer';

type State = {
  freeNumber: number,
  rvNumber: number,
}
type Actions = {
  setFreeNumber: (num: number) => void
  setRvNumber: (num: number) => void
}
const initialState = {
  freeNumber: 0,
  rvNumber: 0,
}
export const useAppStore = create(
  immer<State & Actions>((set) => ({
    ...initialState,
    setFreeNumber: (num: number) => set((state) => { state.freeNumber = num }),
    setRvNumber: (num) => set({ rvNumber: num })
  }))
)