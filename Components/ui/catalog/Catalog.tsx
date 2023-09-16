import React, {FC} from 'react';
import { IProduct } from '../../../types/product.types';
import ProductItem from './product-item/ProductItem';
import Loader from '../Loader';
import Heading from '../Heading';

interface CatalogProps {
        products : IProduct[]
        isLoading?: boolean 
        title?: string
        isPagination?: boolean
    }

const Catalog: FC<CatalogProps> = ({products, isLoading, title, isPagination = false}) => {

    if(isLoading) return <Loader/>

    return <section>
        {title && <Heading className=' mb-5 mt-2' >{title}</Heading>}
        {
            products?.length 

            ? <div className='grid grid-cols-4 gap-10' >{products?.map(product => <ProductItem key={product.id} product={product} />)}</div>

            : <div>Products not found</div>
        }
    </section>
};

export default Catalog;