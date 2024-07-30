import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

export const CartSlice = createSlice({
    name: 'Cart',
    initialState: {
        products: initialState
    },
    reducers: {
        addProducts: (state, action ) => {
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                const productWithQuantity = { ...action.payload, quantity: 1 };
                state.products = [...state.products, productWithQuantity];
            }
        },
        incrementQuantity: (state, action) => {
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            }
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.products = [];
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    addProducts,
    incrementQuantity,
    decrementQuantity,
    deleteProduct,
    clearCart
} = CartSlice.actions;
