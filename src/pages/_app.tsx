//pages/_app.tsx

import React,{useState} from 'react'

//css
import '@/styles/reset.css'
import '@/styles/common.scss'
import '@/styles/style.scss';
import '@/styles/pc_mod.scss'

import Layout from '@/inc/Layout'
import type { AppProps } from 'next/app'
import AppContext from '@/context/AppContext';
//FontAwsome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import ResponsiveObserve from '@/utill/ResponsiveObserve' 

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {

  const [asideisOpen, setAsideisOpen] = useState(false);
  const [mobileCheck, setMobileCheck] = useState(false);

  return (
    <AppContext.Provider value={{asideisOpen, setAsideisOpen, mobileCheck, setMobileCheck}}>
      <Layout>
        <ResponsiveObserve />
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )

}

export default MyApp;