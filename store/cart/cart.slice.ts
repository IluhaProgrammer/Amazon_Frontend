import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartInitialState, IAddCartPayload, IChangeQuantity } from "../../types/cart.types";

const initialState: ICartInitialState  = {
    items: []
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<IAddCartPayload>) {
            const isExist = state.items.some((item) => 
                item.product?.id === action.payload.product?.id
            )

            if(!isExist) {
                state.items.push({...action.payload, id: state.items.length})
            }
        },
        removeFromCart(state, action: PayloadAction<{name: string}>) {
            state.items = state.items.filter((item) => 
                item.product?.name !== action.payload.name
            )
        },
        changeQuantity(state, action: PayloadAction<{name : string, type: 'plus' | 'minus'}>) {
            const {name, type} = action.payload
            const item = state.items.find((item) => item.product?.name === name)

            if(item) {
                type === 'plus' ? item.quantity && item.quantity++ : item.quantity && item.quantity--  
            }
        },
        resetCart(state) {
            state.items = []
        }
    }
})

export default CartSlice.reducer
export const {addToCart, removeFromCart, resetCart, changeQuantity} = CartSlice.actions