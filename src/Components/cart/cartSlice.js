import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingProduct = state.cart.find(item => item.id === action.payload.id);
            
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity || 1; 
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.unitPrice;
            } else {
                state.cart.push({ 
                    ...action.payload, 
                    quantity: action.payload.quantity || 1,
                    totalPrice: action.payload.unitPrice
                });
            }
        },
        increaseItemQuantity(state, action) {
            const existingProduct = state.cart.find(item => item.id === action.payload);
            if (existingProduct) {
                existingProduct.quantity++;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.unitPrice;
            }
        },
        decreaseItemQuantity(state, action) {
            const existingProduct = state.cart.find(item => item.id === action.payload);
            if (existingProduct) {
                existingProduct.quantity--;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.unitPrice;
            }
        },
        removeItem(state, action) {
            state.cart =  state.cart.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const { addToCart, clearCart, increaseItemQuantity, decreaseItemQuantity, removeItem } = cartSlice.actions;
export const totalCartPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export default cartSlice.reducer;
