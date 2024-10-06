import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import cartSlice from "./Components/cart/cartSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        cart: cartSlice,
    }
})

export default store;