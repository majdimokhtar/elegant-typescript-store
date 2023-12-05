import { AppDispatch } from "./store"
import { useDispatch } from "react-redux"

type dispatchFunction = () => AppDispatch

export const useCattDispatch: dispatchFunction = useDispatch
