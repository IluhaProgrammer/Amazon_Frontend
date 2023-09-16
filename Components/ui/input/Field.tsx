"use client"

import React, { FC, forwardRef } from 'react';
import { IField } from './field.interface';
import cn from 'clsx'


const Field = forwardRef<HTMLInputElement, IField>(({
    placeholder, error, type='text', className, style, Icon ,...rest
}, ref) => {
    return (
        <div className={cn('', className)} style={style} >
            <label className=' mb-4' >
                <span>
                    {Icon && <Icon className='mr-3' />}
                    {placeholder}
                </span>
                <input placeholder={placeholder} ref={ref} type={type} className={cn('border rounded-lg border-gray border-solid placeholder:font-normal outline-none px-6 py-2 w-full focus:border-primary transition-all ',{
                    'border-red-600': error && error
                }, className)} {...rest}/>
            </label>
            {error && <div className='font-semibold text-sm text-red-600 align-middle' >{error}</div>}
        </div>
    )
})

Field.displayName = 'Field'

export default Field;