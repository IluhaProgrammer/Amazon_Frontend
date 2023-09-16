"use client"

import React, { FC, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { IProduct } from '../../../../types/product.types';

const ProductRating: FC<{product : IProduct}> = ({product}) => {
    const [rating, setRating] = useState(Math.round(product.reviews.reduce((acc, review) => acc + review.raiting, 0 ) / product.reviews.length) || 0)
    return (
        <div className='mt-1' >
            <span className='mb-2 inline-flex items-center' >
            <Rating
                readonly
                initialValue={rating}
                SVGstyle={{
                    display: 'inline-block'
                }}
                size={20}
                allowFraction
                transition
            />
            {rating && <span style={{color: "#FFBC0D", marginLeft: '3px', marginRight: '2px'}} >{rating}</span>}
            </span>
            <span className=' text-xs' >({product.reviews.length} reviews)</span>
        </div>
    );
};

export default ProductRating;