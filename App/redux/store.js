import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizeSlice"

export default configureStore({
    reducer:{
        quiz:quizReducer
    },
})