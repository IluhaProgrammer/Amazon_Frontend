import { IAuthResponse, Itokens } from '../../store/user/user.interface'
import Cookies from 'js-cookie'

export const saveTokenStorage = (data : Itokens) => {
    Cookies.set('accesToken', data.accesToken)
    Cookies.set('refreshToken', data.refreshToken)
}

export const getAccesToken = () => {
    const acessToken = Cookies.get('accesToken')
    return acessToken || null
}

export const getUser = async () => {
    return JSON.parse(localStorage.getItem('user') || "{}")
}

export const removeTokensStorage = () => {
    Cookies.remove('accesToken')
    Cookies.remove('refreshToken')
    localStorage.removeItem('user')
}

export const saveToStoraga = (data : IAuthResponse) => {
    saveTokenStorage(data)
    localStorage.setItem('user', JSON.stringify(data.user))
}

