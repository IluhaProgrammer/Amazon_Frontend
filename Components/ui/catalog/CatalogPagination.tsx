"use client"

import React, {FC, useState} from 'react';
import { IProduct, TypePaginationProduct } from '../../../types/product.types';
import ProductItem from './product-item/ProductItem';
import Loader from '../Loader';
import Heading from '../Heading';
import SortDropDown from './sort/SortDropDown';
import Button from '../button/button';
import { EnumSortFilters } from '../../../services/product/products.interface';
import { useQuery } from '@tanstack/react-query';
import { ProductSevice } from '../../../services/product/product.service';

interface CatalogPagination {
        data : TypePaginationProduct
        title?: string
    }

const CatalogPagination: FC<CatalogPagination> = ({data, title}) => {

    const [page, setPage] = useState<number>(1)
    const [sortType, setSortType] = useState<EnumSortFilters>(EnumSortFilters.NEWEST)

    const {data : response, isLoading} = useQuery(['products', sortType, page], () => ProductSevice.getAll({
        sort: sortType,
        page,
        limit: 4
    }), {
        initialData: data,
        keepPreviousData: true
    })

    if(isLoading) return <Loader/>

    return <section>
        {title && <Heading className=' mb-5 mt-2' >{title}</Heading>}
        <SortDropDown sortType={sortType} setSortType={setSortType} />
        {
            response?.length 

            ? <><div className='grid grid-cols-4 gap-10' >{response?.products.map(product => <ProductItem key={product.id} product={product} />)}</div>
                <div className='flex justify-center mt-10' >
                    {Array.from({length: response.length / 4}).map((_, index) => {
                    const pageNumber = index + 1
                    return (
                        <Button 
                        key={index}
                            variant={page === pageNumber ?'dark' :'light'} 
                            onClick={() => setPage(pageNumber)}
                            className='mx-3 w-2 text-sm'
                        >
                            {pageNumber} 
                        </Button>
                    )
                })}
                </div>
                
                </>

            : <div>Products not found</div>
        }
    </section>
};

export default CatalogPagination;