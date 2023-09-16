"use client"

import HomePage from '../Components/page';
import { NextPage } from 'next';
import React from 'react';
import { ProductSevice } from '../services/product/product.service';
import { useQuery } from '@tanstack/react-query';

const Home:NextPage = () => {

    const {data} = useQuery(['products'], () => ProductSevice.getAll({
        page: 1,
        limit: 4
    }))

    return <HomePage length={data?.length || 0} products={data?.products || []} />
};

export default Home;