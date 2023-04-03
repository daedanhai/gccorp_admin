//pages/_app.tsx
import '@/styles/globals.css'
import '@/styles/common.css'
import type { AppProps } from 'next/app'


//FontAwsome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { wrapper } from "../store/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default wrapper.withRedux(MyApp);