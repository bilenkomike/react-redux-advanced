import { configureStore } from "@reduxjs/toolkit";

// slices
import uiSlice from './slices/ui-slice';

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
    }
});

export default store;