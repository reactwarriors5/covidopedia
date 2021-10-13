import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice/userSlice";
import doctorReducer from "../features/doctorSlice/doctorSlice";

export default configureStore({
    reducer:{
        user: userReducer,
        doctor:doctorReducer,
    },
});