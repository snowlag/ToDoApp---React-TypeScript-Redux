import {createStore} from "redux"
import { todoreducer } from "./Reducers/todoreducer"

export const store = createStore(todoreducer)