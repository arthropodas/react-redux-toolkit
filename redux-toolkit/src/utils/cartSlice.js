import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name:'cart',
        initialState: {
            items:[]
        },
        reducers: {
            addItem:(state, action)=>{
                state.items.push(action.payload)
            },
            clearCart:(state)=>{
                state.items = []
            },
            removeItem:(state)=>{
                state.items.pop()
            },
            removeFrom:(state,index)=>{
                state.items.removeFrom(index)
            }
        }
    }
)

export const {addItem, removeItem, clearCart, removeFrom} = cartSlice.actions
export default cartSlice.reducer;