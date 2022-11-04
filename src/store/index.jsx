import { configureStore } from "@reduxjs/toolkit";

// slices
import uiSlice from './slices/ui-slice';
import cartSlice from './slices/cart-slice';

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
});

export default store;