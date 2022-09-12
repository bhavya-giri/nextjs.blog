import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import layout from '../components/layout'

const FirstPost = () => {
  return (
    <layout>
    <Head>
      <title>First Post</title>
    </Head>
    <h1>First Post</h1>
    <h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
  </layout>
  )
}

export default FirstPost