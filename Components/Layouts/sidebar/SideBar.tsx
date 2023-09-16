import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { CategorySevice } from '../../../services/auth/category.service';
import Heading from '../../ui/Heading';
import {HiArrowDown} from 'react-icons/hi'
import { useRouter, usePathname } from 'next/navigation';
import { ICategory } from '../../../types/category.types';
import cn from 'clsx'
import { useAuth } from '../../../hooks/useAuth';
import {FiLogOut} from 'react-icons/fi'
import { logout } from '../../../store/user/user.action';

const SideBar = () => {

    const {user} = useAuth()

    const {push} = useRouter()

    const pathname = usePathname()

    const {data: categories} = useQuery(['get categories'], () => CategorySevice.getAll(), {
        select: ({data}) => data
    })

    const selectCategory = (category: ICategory, page ?: number) => {
        push(`/category/${category.slug}`)
        console.log(category && category.id === page)
    }

    const log = () => {
        push('/auth')
        logout()
    }

    return (
        <aside className='h-full bg-secondary' >
            <Heading className=' px-6 mb-3 text-xl text-white flex items-center' >
                Categories <HiArrowDown className=' text-primary ml-3' />
            </Heading>
            <div className='' >
                {categories && categories.map((category, index) => {
                    const currentPage = index + 1

                    return (
                        <button onClick={() => selectCategory(category, currentPage )} className={ pathname === `/category/${category.name}` ?'text-primary text-xl px-6 py-1 w-full text-left' :'text-white text-xl px-6 py-1 hover:text-primary duration-200 transition-all w-full text-left'} key={category.id}>
                        {category.name}
                    </button>
                    )
                }
                    
                )}
            </div>
            <div>
                {
                    user && (
                        <button 
                            className='text-white flex items-center mt-20 ml-6 mb-5'
                            onClick={() => log()}
                        >
                            <FiLogOut/>
                            <span className='ml-2' >Logout</span>
                        </button>
                    )
                        
                }
            </div>
        </aside>
    );
};

export default SideBar;