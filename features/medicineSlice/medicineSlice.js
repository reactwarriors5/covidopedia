import { createSlice } from "@reduxjs/toolkit";

export const medicineSlice = createSlice({
    name: "medicine",
    initialState: {
        medicine:null
    },
    reducers: {
        medicineInfo: (state,action) => {
            state.medicine = action.payload;
            // console.log(state.medicine);
        },
        
    }
})

export const { medicineInfo } = medicineSlice.actions;

export const selectMedicine = (state) => state.medicine.medicine;

export default medicineSlice.reducer;