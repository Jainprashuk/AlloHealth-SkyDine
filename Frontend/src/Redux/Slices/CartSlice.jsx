import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        AddToCart: (state, action) => {
            const existingItem = state.cart.find(
                (item) => 
                    item.id === action.payload.id && 
                    item.person === action.payload.person &&
                    item.selectedDrinkprice === action.payload.selectedDrinkprice
            );
            if (existingItem) {
                state.cart = state.cart.map((item) =>
                    item.id === action.payload.id && 
                    item.person === action.payload.person &&
                    item.selectedDrinkprice === action.payload.selectedDrinkprice
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                state.cart.push(action.payload);
            }
        },
        
        RemoveFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (item) => 
                    !(item.id === action.payload.id && 
                    item.person === action.payload.person &&
                    item.selectedDrinkprice === action.payload.selectedDrinkprice)
            );
        },
        incrementQty: (state, action) => {
            state.cart = state.cart.map((item) =>
                item.id === action.payload.id && 
                item.person === action.payload.person &&
                item.selectedDrinkprice === action.payload.selectedDrinkprice
                    ? { ...item, qty: item.qty + 1 }
                    : item
            );
        },
        decrementQty: (state, action) => {
            state.cart = state.cart.map((item) =>
                item.id === action.payload.id && 
                item.person === action.payload.person &&
                item.selectedDrinkprice === action.payload.selectedDrinkprice
                    ? { ...item, qty: item.qty - 1 }
                    : item
            );
        },
        resetMealSelections: (state) => {
            state.cart = []; // Resets cart state
        },
    }
});

export const { AddToCart, RemoveFromCart, incrementQty, decrementQty, resetMealSelections } = cartslice.actions;
export default cartslice.reducer;
