import React, { ReactNode } from 'react';
import Aside from './Aside';
import Header from '@/inc/Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div id='view'>
        <Aside />
        <div id='contnets-container'>
          <Header />
          <div id='contents'>
            { children }
          </div>
        </div>  
      </div>
    </>
    
  );
};

export default Layout;