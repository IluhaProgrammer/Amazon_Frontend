"use client" // use client component

import { FC, PropsWithChildren, useEffect } from "react";
import { TypeComponentAuthFields } from "./auth-pages.types";
import {  usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useAuth } from "../../hooks/useAuth";
import { useActions } from "../../hooks/useActions";
import { getAccesToken } from "../../services/auth/auth.helper";
import Cookies from "js-cookie";

const DynamicCheckRole = dynamic(() => import('./check-role'), {ssr: false})

const AuthProvider : FC<PropsWithChildren<TypeComponentAuthFields>> = ({Component: {
    isOnlyUser
}, children}) => {

    const {user} = useAuth()
    const {checkAuth, logout} = useActions()

    const pathname = usePathname()

    useEffect(() => {
        const accesToken = getAccesToken()
        if(accesToken) {
            checkAuth()
        }
    }, [])

    useEffect(() => {
        const refreshToken = Cookies.get('refreshToken')
        if(!refreshToken && user) {
            logout()
        }
    }, [pathname])

    return isOnlyUser ? <DynamicCheckRole Component={{isOnlyUser}}>{children}</DynamicCheckRole> : <>{children}</>


}

export default AuthProvider