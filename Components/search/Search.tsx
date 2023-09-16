'use client'

import React, { FC, useState } from 'react';
import {BiSearch} from 'react-icons/bi'
import Button from '../ui/button/button';
import { useRouter } from 'next/navigation';


const Search: FC = () => {

    const [search, setSearch] = useState<string>('')


    const {push} = useRouter()

    const searchClick = () => {
        push(`/q?q=${search}`)
        setSearch('')
    }

    return (
        <div className=' rounded-xl flex relative' >
            <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search...'
                className=' outline-none py-2 px-4 rounded-xl border-transpare bg-black text-white w-full'
            />
            <Button variant='dark' className='absolute right-0 bottom-1' onClick={searchClick}>
                <BiSearch/>
            </Button>
        </div>
    );
};

export default Search;