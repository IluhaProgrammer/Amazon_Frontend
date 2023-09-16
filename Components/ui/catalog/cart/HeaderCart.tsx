import React, {FC} from 'react';
import { useOutside } from '../../../../hooks/useOutside';
import { useCart } from '../../../../hooks/useCart';
import SquerButton from './SquerButton';
import { RiShoppingCartLine } from 'react-icons/ri';
import cn from 'clsx'
import CartItem from './CartItem';
import { convertPrice } from '../../../../store/utils/convertPrice';
import Button from '../../button/button';

const HeaderCart: FC = () => {

    const {ref, isShow, setIsShow} = useOutside(false)

    const {items, total} = useCart()



    return (
        <div className='relative ' ref={ref} >
            <SquerButton 
                Icon={RiShoppingCartLine} 
                number={items.length}
                onClick={() => setIsShow(!isShow)}
            />
            {
                isShow 
                    ? <div className={cn('absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white', isShow ?' open-menu' :' close-menu')} >
                <div className=' font-normal text-lg mb-4' >My cart</div>
                <div className='' >
                {items.length ? (
                    items.map((item) => <CartItem key={item.id} item={item} /> )
                ) :  <div className='font-light' >
                    Cart is Empty
                </div>
                }
                </div>
                
                <div className='mt-10' >
                    <div>Total:</div>
                    <div>{convertPrice(total)}</div>
                </div>
                <div className='text-center' >
                    <Button 
                        variant='light'  
                        className='text-sm btn-link mt-5 mb-2'
                    >
                        Place Order
                    </Button>
                </div>
            </div>

                    : null
            }
            
        </div>
    );
};

export default HeaderCart;