import Head from 'next/head';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  const [asideState, setAsideState] = React.useState(true);

  function asideBtnClick() {
    setAsideState(!asideState);
  }

  return (
    <>
      <Head>
        <title>대단한컴퍼니 홈페이지 관리자</title>
        <meta name="description" content="대단한컴퍼니 홈페이지 관리자 사이트" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={asideState === true ? 'asideOn' : ''}>

        {/* Aside */}

        {/* Contents */}
        <div id='contents-container'>
          <div className='contents-inner'>
            <div className='title-wrap'>
              <h2>홈</h2>
              <p className='navi'>홈</p>
            </div>
            <div className='con-box'></div>
          </div>
        </div>

      </main>
      
    </>
  )
}
