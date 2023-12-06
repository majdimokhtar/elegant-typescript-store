import { AppDispatch, RootState } from "./store"
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux"

type DispatchFunction = () => AppDispatch

export const useCattDispatch: DispatchFunction = useDispatch
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector
