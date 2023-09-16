import { getContenttype } from "../../api/api.helper"
import { IAuthResponse, IEmailPassword } from "../../store/user/user.interface"
import Cookies from "js-cookie"
import { saveToStoraga } from "./auth.helper"
import instance, { axiosClassic } from "../../api/api.interceptor"

export const  AuthService = {
    async main(type : 'login' | 'register', data : IEmailPassword) {
        const response = await axiosClassic<IAuthResponse>({
            url: `/auth/${type}`,
            method: 'POST',
            data
        })

        if(response.data) {
            saveToStoraga(response.data)
        }

        return response.data
    },  

    async getNewTokens() {
        const refreshToken = Cookies.get('refreshToken') 

        const response = await axiosClassic.post<string, {data : IAuthResponse}>('/auth/access', {refreshToken})

        if(response.data.accesToken) {
            saveToStoraga(response.data)
        }

        return response
    }


}