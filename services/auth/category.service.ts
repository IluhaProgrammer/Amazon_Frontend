import instance, { axiosClassic } from "../../api/api.interceptor"
import { ICategory } from "../../types/category.types"

const CATEGORY = 'categories'

export const CategorySevice = {
    async getAll() {
        return axiosClassic<ICategory[]>({
            url: CATEGORY,
            method: 'GET'
        })
    },

    async getById(id : number | string) {
        return axiosClassic<ICategory>({
            url: `${CATEGORY}/${id}`,
            method: 'GET'
        })
    },

    async getbySlug(slug : string) {
        return axiosClassic<ICategory>({
            url: `${CATEGORY}/by-slug/${slug}`,
            method: 'GET'
        })
    },

    async createCategory() {
        return instance<ICategory>({
            url: `${CATEGORY}`,
            method: 'POST'
        })
    },

    async updateCategory(id : number | string, name : string  ) {
        return instance<ICategory>({
            url: `${CATEGORY}/`,
            method: 'PUT',
            data: {name}
        })
    },

    async deleteCAtegory(id : string | number) {
        return instance<string>({
            url: `${CATEGORY}/${id}`,
            method: 'DELETE'
        })
    },
}