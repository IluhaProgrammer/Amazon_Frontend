import axios from "axios";
import { errorCatch, getContenttype } from "./api.helper";
import { getAccesToken, removeTokensStorage } from "../services/auth/auth.helper";
import  {AuthService}  from "../services/auth/auth.service";

const axiosOptions = {
    baseURL: process.env.SERVER_URL,
    headers: getContenttype()
}

export const axiosClassic = axios.create(axiosOptions)

const instance = axios.create(axiosOptions)

instance.interceptors.request.use(async config => {

    const acessToken = getAccesToken()

    if(config.headers && acessToken) {
        config.headers.Authorization = `Bearer ${acessToken}`
    }

    return config
})

instance.interceptors.response.use(config => config, async error => {
    const originalRequest = error.config

    if(
        (error?.response?.status === 401 || 
            errorCatch(error) === 'jwt expired' ||
            errorCatch(error) === 'jwt must be provided') &&
        error.config && !error.config._isRetry 
        ) {
            originalRequest._isRetry = true

            try {
                await AuthService.getNewTokens()
                return instance.request(originalRequest)
            } catch(e) {
                if(errorCatch(e) === 'jwt expired') {
                    removeTokensStorage()
                }
            }
    }
})

export default instance