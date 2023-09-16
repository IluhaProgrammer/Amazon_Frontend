import { IUser } from "../../types/user.types"

export interface IUserState {
    email : string
    isAdmin : boolean
}

export interface Itokens {
    accesToken : string
    refreshToken : string
}

export interface IInitialState {
    user : IUser | null
    isLoading : boolean
}

export interface IEmailPassword {
    email : string
    password : string
}

export interface IAuthResponse extends Itokens {
    user : IUser
}