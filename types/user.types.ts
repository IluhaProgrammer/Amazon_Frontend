import { IOrder } from "./order.types"
import { IProduct } from "./product.types"

export interface IUser {
    id : number
    email : string
    name : string
    phone : string
    avatarPath : string
}

export interface IFullUser extends IUser {
    favorites: IProduct[],
    orders: IOrder[],
    
}