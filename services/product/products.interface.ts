export const PRODUCT = '/products'

export type TypeData = {
    name : string
    price : number
    description ?: string
    images : string[]
    categoryId : number
}

export type TypeDataFilters = {
    sort ?: EnumSortFilters
    searchTerm ?: string
    page?: number | string
    limit?: number | string

}

export enum EnumSortFilters {
    HIGHT_PRICE = 'HIGHT_PRICE',
    LOW_PRICE = 'LOW_PRICE',
    NEWEST = 'NEWEST',
    OLDEST = 'OLDEST'
}

