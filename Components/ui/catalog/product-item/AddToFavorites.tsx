import React, { FC } from 'react';
import { IProduct } from '../../../../types/product.types';
import { useCart } from '../../../../hooks/useCart';
import { useActions } from '../../../../hooks/useActions';
import {RiShoppingCartFill, RiShoppingCartLine} from 'react-icons/ri'

const AddToCart: FC<{product : IProduct}> = ({product}) => {

    const {addToCart, removeFromCart} = useActions()

    const {items} = useCart()

    const isExist = items.some((item) => item.product?.name === product.name )

    return (
        <div>
            <button
                className='text-secondary transform scale-150 mt-2'
                onClick={() => 
                     isExist
                                ? removeFromCart({name: product.name})
                                : addToCart({
                                    product,
                                    quantity: 1,
                                    price: product.price
                                })
                }
            >
                {isExist
                        ? <RiShoppingCartFill/>
                        : <RiShoppingCartLine/>
                }
            </button>
        </div>
    );
};

export default AddToCart