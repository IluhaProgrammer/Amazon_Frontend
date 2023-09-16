"use client"

import React from 'react';
import { NextPageAuth } from '../../providers/auth-provider/auth-pages.types';
import { useProfile } from '../../hooks/useProfile';
import Layout from '../../Components/Layouts/layout';
import Catalog from '../../Components/ui/catalog/Catalog';

const FavoritesPage: NextPageAuth = () => {

    const {profile} = useProfile() 

    return (
        <Layout>
            <Catalog products={profile?.favorites || []} title='Favorites' />
        </Layout>
    );

};

FavoritesPage.isOnlyUser = true

export default FavoritesPage;