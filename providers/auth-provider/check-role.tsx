
import React, { PropsWithChildren, FC } from 'react';
import { TypeComponentAuthFields } from './auth-pages.types';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/router';

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({Component: {
    isOnlyUser
}, children}) => {

    const {user} = useAuth() 

    const router = useRouter()

    if(user && isOnlyUser) {
        return <>{children}</>
    }

    router.pathname !== '/auth' && router.replace('/auth')
    return null
   
};

export default CheckRole