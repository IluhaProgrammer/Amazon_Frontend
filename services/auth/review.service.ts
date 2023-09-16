import instance, { axiosClassic } from "../../api/api.interceptor"
import { IReview } from "../../types/review.types"

const REVIEW = 'reviews'

type TypeData = {
    raiting : number
    text : string
}

export const ReviewSevice = {

    async getAll() {
        return axiosClassic<IReview[]>({
            url: REVIEW,
            method: 'GET'
        })
    },

    async leaveReview(productId : number | string, data : TypeData) {
        return axiosClassic<string>({
            url: `${REVIEW}/leave/${productId}`,
            method: 'POST',
            data
        })
    },
    async getAverageRating(productId : number | string) {
        return axiosClassic<number>({
            url: `${REVIEW}/average/${productId}`,
            method: 'GET',
        })
    },

}