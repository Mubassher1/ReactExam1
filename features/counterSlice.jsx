import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },

    reducers: {
        increMent: (state, action) => {
            state.count = state.count + action.payload;
        },
        decreMent: (state) => {
            state.count = state.count - 1;
        },
        incDyn: (state, action) => {
            state.count = state.count + action.payload;
        },
    },
});

export const { increMent, decreMent, incDyn } = counterSlice.actions;

export default counterSlice.reducer;