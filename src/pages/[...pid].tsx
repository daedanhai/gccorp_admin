import Head from 'next/head';
import React, { useEffect, useState } from "react";
import Layout from '@/inc/Layout';
import Dashboard from '@/contents/Dashboard';
import Portfolio from '@/contents/Portfolio';
import Notice from '@/contents/Notice';
import Contact from '@/contents/Contact';
import { useRouter } from 'next/router';

export default function Contents() {
  const { query } = useRouter();
  const pid = String(query.pid);
  return (
    <>
      <Layout>
        {pid === 'home' ? <Dashboard /> : ''}
        {pid === 'portfolio' ? <Portfolio /> : ''}
        {pid === 'notice' ? <Notice /> : ''}
        {pid === 'contact' ? <Contact /> : ''}
      </Layout>
    </>
  )
}
