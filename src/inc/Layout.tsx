import React, { ReactNode,useContext } from 'react';
import AppContext from "@/context/AppContext";
import Aside from './Aside';
import Header from '@/inc/Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { mobileCheck,asideisOpen } = useContext(AppContext);
  return (
    <>
      <div id='view' className={`${asideisOpen ? 'aside-open' : ''}${mobileCheck ? ' m-mod' : ' pc-mod'}`}>
        <Aside />
        <main id='contnets-container'>
          <Header />
          <div id='contents'>
            { children }
          </div>
        </main>  
      </div>
    </>
    
  );
};

export default Layout;