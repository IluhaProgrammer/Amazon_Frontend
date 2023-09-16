import instance from "../api/api.interceptor"
import { IOrder } from ".././types/order.types"

const ORDER = '/orders'

export const OrderSevice = {
    async getAllOrders() {
        return instance<IOrder[]>({
            url: ORDER,
            method: 'GET'
        })
    }
}