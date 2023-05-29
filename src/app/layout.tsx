import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import React, { useState } from 'react';
import Home from './page.tsx'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Isovox',
  description: 'checkout',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Head>
        <title>Isovox Checkout</title>
        <meta name="description" content="isovox" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Home/>
      </body>
            <Script src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js" />

    </html>
  )
}
