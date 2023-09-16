import React, { FC, PropsWithChildren } from 'react';
import SideBar from './sidebar/SideBar';
import Header from './header/Header';

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <div>
                <Header/>
            <div className='grid' style={{gridTemplateColumns: '1fr 4fr'}} >
                <SideBar/>
                <main className='p-10' >
                    {children}  
                </main>
            </div>
        </div>
    );
};

export default Layout;