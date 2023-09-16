import { ICategory } from "./category.types"
import { IReview } from "./review.types"

export interface IProduct {
    id : number
    name : string
    slug : string
    description : string
    price : number
    category : ICategory
    reviews : IReview[]
    images : string[]
    createdAt : string
}

export interface IProductDetails {
    product : IProduct
}

export interface TypeProduct {
    products : IProduct[]
}
export interface TypePaginationProduct {
    products : IProduct[]
    length : number
}