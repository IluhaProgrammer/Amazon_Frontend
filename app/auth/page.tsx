"use client"

import { NextPage } from 'next';
import Button from '../../Components/ui/button/button'
import Heading from '../../Components/ui/Heading';
import { useAuth } from '../../hooks/useAuth';
import { useActions } from '../../hooks/useActions';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IEmailPassword } from '../../store/user/user.interface';
import Field from '../../Components/ui/input/Field';
import Loader from '../../Components/ui/Loader';
import { useAuthRedirect } from '../../hooks/useAuthRecirect';

const AuthPage: NextPage = () => {

    useAuthRedirect()

    const {isLoading} = useAuth()

    const {register, login} = useActions()

    const [type, setType] = useState<'login' | 'register'>('login')

    const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<IEmailPassword>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IEmailPassword> = (data) => { 
        if(type === 'login') {
            login(data)
        } else {
            register(data)
        }
        reset()
    }

    return <>
        <section className='flex h-screen' >
        <form onSubmit={handleSubmit(onSubmit)} className=' rounded-lg bg-white shadow-sm p-10 m-auto w-1/4 h-auto ' >
            <Heading className='capitalize text-center mb-4' >{type}</Heading>

            {isLoading ?<Loader/> : <>

            <Field {...formRegister('email', {
                required: 'Email is require',
                pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Please, enter a valid email address'
                }
            })} placeholder='Enter email' error={errors.email?.message} className=' mb-3 px-3 border-gray'/>
            <Field {...formRegister('password', {
                required: 'Password is require',
                minLength: {
                    value: 6,
                    message: 'Min length should more 6 symbols'
                }
            })} placeholder='Enter password' error={errors.password?.message} type='password' className=' mb-2 px-3 border-gray '/>
            <Button type='submit' variant='dark'>Lets's go!</Button>
            <div>
                <button 
                type='button'
                className=' inline-block opacity-20 mt-3 text-sm'
                onClick={() => setType(type === 'login' ? 'register' : 'login')}>
                {type === 'login' ?'login':'register'}
                </button>
            </div>
            </>
            }
            </form>
        </section>
        </>
};

export default AuthPage;