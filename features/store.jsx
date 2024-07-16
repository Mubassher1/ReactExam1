import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./noteSlice";
import counterSlice from "./counterSlice";

const store = configureStore({
    reducer: {
        note: noteSlice,
        counter: counterSlice
    },
});

export default store;