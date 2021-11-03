import { createSlice } from "@reduxjs/toolkit";

export const pharmaSlice = createSlice({
    name: "pharma",
    initialState: {
        pharma:null
    },
    reducers: {
        pharmaInfo: (state,action) => {
            state.pharma = action.payload;
            console.log(state.pharma);
        },
        
    }
})

export const { pharmaInfo } = pharmaSlice.actions;

export const selectPharma = (state) => state.pharma.pharma;

export default pharmaSlice.reducer;