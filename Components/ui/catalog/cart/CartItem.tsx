import React, { FC } from 'react';
import { ICartItem } from '../../../../types/cartItem.types';
import Image from 'next/image';
import { convertPrice } from '../../../../store/utils/convertPrice';
import CartActions from './CartActions';

const CartItem: FC<{item: ICartItem}> = ({item}) => {
    return (
        <div className='flex items-center' >
            <Image
                width={100}
                height={100}
                alt={item.product.name}
                src={item.product.images[0]}
            />
            <div className='ml-2' >
                <div className='' >{item.product.name}</div>
                <div>{convertPrice(item.product.price)}</div>
                <CartActions item={item} />
            </div>
        </div>
    );
};

export default CartItem;