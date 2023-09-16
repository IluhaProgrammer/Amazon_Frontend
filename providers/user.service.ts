import instance from "../api/api.interceptor"
import { IFullUser, IUser } from "../types/user.types"

const USER = 'users'

type TypeData = {
    email ?: string
    name ?: string
    password ?: string
    avatarPath ?: string
    phone ?: string
}

export const UserSevice = {
    async getProfile() {
        return instance<IFullUser>({
            url: `${USER}/profile`,
            method: 'GET'
        })
    },

    async updateProfile(data : TypeData) {
        return instance<IUser>({
            url: `${USER}/update-profile`,
            method: 'PUT',
            data
        })
    },

    async toggleFavorites(productId : number | string) {
        return instance<IUser>({
            url: `${USER}/profile/favorites/${productId}`,
            method: 'PATCH',
        })
    }
}