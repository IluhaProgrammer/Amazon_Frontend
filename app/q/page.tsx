"use client"

import { NextPage } from 'next';
import React from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { ProductSevice } from '../../services/product/product.service';
import Layout from '../../Components/Layouts/layout';
import Catalog from '../../Components/ui/catalog/Catalog';

const SearchPage: NextPage = () => {

    const searchParams = useSearchParams()

    const search = searchParams.get('q')

    const {data} = useQuery(['search products', search], () => ProductSevice.getAll({
        searchTerm: search || ''
    }))

    return (
        <Layout>
            <Catalog products={data?.products || []} title={`Поиск по запросу ${search || ''}`} />
        </Layout>
    );
};

export default SearchPage;