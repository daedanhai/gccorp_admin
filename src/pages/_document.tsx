import { Html, Head, Main, NextScript } from 'next/document'
import Aside from '@/inc/Aside';

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <Aside/>
        <NextScript />
      </body>
    </Html>
  )
}
