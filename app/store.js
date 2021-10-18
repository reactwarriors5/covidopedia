import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice/userSlice";
import doctorReducer from "../features/doctorSlice/doctorSlice";

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const rootReducer= combineReducers({
    user: userReducer,
    doctor:doctorReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({

    reducer:persistedReducer,
});