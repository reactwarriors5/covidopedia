import { createSlice } from "@reduxjs/toolkit";

export const doctorSlice = createSlice({
    name: "doctor",
    initialState: {
        doctor:null
    },
    reducers: {
        doctorInfo: (state,action) => {
            state.doctor = action.payload;
            console.log(state.doctor);
        },
        
    }
})

export const { doctorInfo } = doctorSlice.actions;

export const selectADoctor = (state) => state.doctor.doctor;

export default doctorSlice.reducer;