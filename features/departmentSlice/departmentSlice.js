import { createSlice } from "@reduxjs/toolkit";

export const departmentSlice = createSlice({
    name: "department",
    initialState: {
        department:null
    },
    reducers: {
        departmentInfo: (state,action) => {
            state.department = action.payload;
            console.log(state.department);
        },
        
    }
})

export const { departmentInfo } = departmentSlice.actions;

export const selectDepartment = (state) => state.department.department;

export default departmentSlice.reducer;