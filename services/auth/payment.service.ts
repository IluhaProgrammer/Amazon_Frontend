import instance from "../../api/api.interceptor"
import { IPaymentResponse } from "../../types/payment.types"

const PAYMENT = '/payment'

export const PaymentSevice = {
    async getAll(amount : number) {
        return instance.post<IPaymentResponse>(PAYMENT, {amount})
    },
}