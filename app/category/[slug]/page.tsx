'use client'

import { NextPage } from 'next';
import React from 'react';
import PageCategory from '../../../Components/pageCategory';
import { useQuery } from '@tanstack/react-query';
import { ProductSevice } from '../../../services/product/product.service';
import { useParams } from 'next/navigation';
import { CategorySevice } from '../../../services/auth/category.service';
import { ICategory } from '../../../types/category.types';

const CategoryPage: NextPage = () => {

    const {slug} = useParams()

    const {data : products} = useQuery(['get prd'], () => ProductSevice.getByCategorySlug(slug), {
        select: ({data}) => data
    })

    const {data : categoryName} = useQuery(['get categories slug'], () => CategorySevice.getbySlug(slug), {
        select: ({data}) => data
    })

    return (
        <PageCategory products={products || []} category={categoryName || {} as ICategory} />
    );
};

export default CategoryPage;