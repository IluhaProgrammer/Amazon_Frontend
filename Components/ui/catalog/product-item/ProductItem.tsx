import React, { FC } from 'react';
import { IProduct } from '../../../../types/product.types';
import Image from 'next/image';
import AddToCart from './AddToFavorites';
import ProductRating from './ProductRating';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { convertPrice } from '../../../../store/utils/convertPrice';

const DynamicFavoriteBUtton = dynamic(() => import('../product-item/FvoriteButton'), {ssr: false})

const ProductItem: FC<{product : IProduct}> = ({product}) => {
    return (
        <div className='animate-scaleIn' >
            <div className='bg-white rounded-xl relative inline-block' >
                <div className='absolute top-2 right-2 z-10' >
                    <DynamicFavoriteBUtton id={product.id} />
                    <AddToCart product={product}/>
                </div>
                
                <Link href={`/product/${product.slug}`} >
                <Image width={250} height={250} className='rounded-xl' src={product.images[0]} alt={product.name}/>
                </Link>
            </div>
            <Link href={`/product/${product.slug}`}>
            <h1 className='mb-1 font-bold text-lg' >{product.name}</h1>
            </Link>
            <Link href={`/category/${product.category.slug}`} className='text-aqua text-xs mb-2'>{product.category.name}</Link>
            <ProductRating product={product}/>
            <div className='mt-1 text-xl font-semibold' >{convertPrice(product.price)}</div>
        </div>
    );
};

export default ProductItem;