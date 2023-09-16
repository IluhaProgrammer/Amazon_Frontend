import { GetStaticPaths, NextPage } from 'next';
import React from 'react';
import Layout from '../Components/Layouts/layout';
import { ICategory } from '../types/category.types';
import { IProduct } from '../types/product.types';
import Catalog from '../Components/ui/catalog/Catalog';

const PageCategory: NextPage<{
    category: ICategory,
    products: IProduct[]
}> = ({category, products}) => {

    return (
        <Layout>
            <Catalog products={products || []} title={category?.name} />
        </Layout>
    );
};

export default PageCategory;