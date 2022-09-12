import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
const FirstPost = () => {
  return (
    <div>
      <Head>
        <title>BLog</title>
      </Head>
      <Script
      src='https://connect.facebook.net/en_US/sdk.js'
      strategy='lazyOnLoad'
      onLoad={() =>
        console.log(`script loaded correctly, window.FB has been populated`)
      }
      />

        <h1>first-post</h1>
        <Image src="/../public/images/profile.jpg" width={150} height={150} alt="Bhavya"/>
        <Link href='/'>to home</Link>
    </div>
  )
}

export default FirstPost