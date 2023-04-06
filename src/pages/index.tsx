import Head from 'next/head';
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const asPath = router.asPath;
  useEffect(() => {
    console.log(asPath)
    router.push('/home')
  }, []);
  return (
    <>
      <Head>
        <title>대단한컴퍼니 홈페이지 관리자</title>
        <meta name="description" content="대단한컴퍼니 홈페이지 관리자 사이트" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}
