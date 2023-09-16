import { ICartItem } from "./cartItem.types"
import { IUser } from "./user.types"

export enum EnumStatus {
    PENDING = 'PENDING',
    PAYED = 'PAYED',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED'
}

export interface IOrder {
    id : number
    createdAt : string
    items : ICartItem[]
    status : EnumStatus
    user : IUser
}