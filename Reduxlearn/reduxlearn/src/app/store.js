import {configureStore} from "@reduxjs/toolkit"
import Reducercount from "../Feature/counter/counterSlice"
import PostReducer from "../Feature/posts/postSlice"

export const Store = configureStore({
    reducer:{
        counter:Reducercount,
        posts:PostReducer
    }
})