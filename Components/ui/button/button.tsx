import { NextPage } from 'next';
import React, {ButtonHTMLAttributes, FC, PropsWithChildren} from 'react';
import cn from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant: 'dark' | 'light'
}

const Button: FC<PropsWithChildren<IButton>> = ({children, className, variant, ...rest}) => {
    return <button {...rest} className={cn('rounded-xl px-10 py-2 shadow flex m-auto mt-3 hover:shadow-lg duration-300 ease-in-out', {
        'text-primary bg-white': variant === 'light',
        'text-white bg-primary': variant === 'dark'
    }, className)} >{children}</button>
};

export default Button;