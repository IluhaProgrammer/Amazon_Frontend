import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import Search from '../../search/Search';
import HeaderCart from '../../ui/catalog/cart/HeaderCart';
import ProfileAvatar from '../../ui/catalog/cart/ProfileAvatar';

const Header: FC = () => {
    return <div className=' bg-secondary w-full px-6 py-6 grid' style={{gridTemplateColumns: '1fr 3fr 1.2fr'}} >
    <Link href='/' className=' text-white font-semibold'>
        <span className='text-white font-semibold text-3xl' >Amazon</span><span className=' text-white font-semibold text-3xl' >.com</span>
    </Link>
    <Search/>
    <div className='flex items-center justify-end gap-10' >
        <Link href='/favorites' className=' text-white' >
            <AiOutlineHeart size={28} />
        </Link>
        <HeaderCart/>
        <ProfileAvatar/>
    </div>
    </div>
};

export default Header;