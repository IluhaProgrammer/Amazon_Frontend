import { ICartItem } from "./cartItem.types";
import { IProduct } from "./product.types";

export interface ICartInitialState {
    items: ICartItem[]
}

export interface IAddCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantity extends Pick<ICartItem, 'id'> {
    type: 'minus' | 'plus'
}