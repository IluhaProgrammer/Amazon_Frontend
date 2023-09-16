import instance, { axiosClassic } from "../../api/api.interceptor"
import { IProduct, TypePaginationProduct } from "../../types/product.types"
import { PRODUCT, TypeDataFilters, TypeData } from "./products.interface"



export const ProductSevice = {
    async getAll(queryData = {} as TypeDataFilters) {
        const {data} = await axiosClassic<TypePaginationProduct>({
            url: PRODUCT,
            method: 'GET',
            params: queryData
        }) 

        return data
    },

    
    async getSimilar(productId : string | number) {
        return axiosClassic<IProduct[]>({
            url: `${PRODUCT}/similar/${productId}`,
            method: 'GET',
        })
    },

    async getBySlug(slug : string) {
        return axiosClassic<IProduct[]>({
            url: `${PRODUCT}/by-slug/${slug}`,
            method: 'GET',
        })
    },

    async getByCategorySlug(categorySlug : string) {
        return axiosClassic<IProduct[]>({
            url: `${PRODUCT}/category-slug/${categorySlug}`,
            method: 'GET',
        })
    },

    async getOneProduct(id : string | number) {
        return axiosClassic<IProduct>({
            url: `${PRODUCT}/${id}`,
            method: 'GET',
        })
    },

    async deleteProduct(id : string | number) {
        return instance<IProduct>({
            url: `${PRODUCT}/delete/${id}`,
            method: 'DELETE',
        })
    },

    async updateProduct(id : string | number, data : TypeData) {
        return instance<IProduct>({
            url: `${PRODUCT}/update/${id}`,
            method: 'PUT',
            data
        })
    },

    async createProduct() {
        return instance<IProduct>({
            url: PRODUCT,
            method: 'POST',
        })
    },



    
}