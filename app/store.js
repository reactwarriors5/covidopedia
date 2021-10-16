import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice/userSlice";

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// const reducers = combineReducers({
//     user: userReducer,
// });

const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, userReducer);

export default configureStore({
    reducer: {
        user: persistedReducer,
    },
});