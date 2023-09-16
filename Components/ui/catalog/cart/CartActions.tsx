import React, { FC } from 'react';
import { ICartItem } from '../../../../types/cartItem.types';
import { useActions } from '../../../../hooks/useActions';
import { useCart } from '../../../../hooks/useCart';
import {FiMinus, FiPlus, FiTrash} from 'react-icons/fi'

const CartActions: FC<{item: ICartItem}> = ({item}) => {

    const {removeFromCart, changeQuantity} = useActions()

    const {items} = useCart()

    const quantity = items.find((cart) => cart.product.name === item.product.name)?.quantity

    return (
        <div className='mt-3' >
            <div className='flex items-center gap-3' >
                <button
                    onClick={() => changeQuantity({name: item.product.name, type: 'minus'})}
                    disabled={quantity === 1}
                >
                    <FiMinus size={13} />
                </button>
                <input
                    disabled
                    readOnly
                    value={quantity}
                    className='bg-black w-10 text-center'
                />

                <button
                    onClick={() => changeQuantity({name: item.product.name, type: 'plus'})}
                >
                    <FiPlus size={13} />
                </button>

                <button
                    onClick={() => removeFromCart({name: item.product.name})}
                    className='ml-3 text-dark-primary'
                >
                    <FiTrash/>
                </button>
            </div>
        </div>
    );
};

export default CartActions;