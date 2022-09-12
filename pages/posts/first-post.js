import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
const FirstPost = () => {
  return (
    <div>
        <h1>first-post</h1>
        <Image src="/../public/images/profile.jpg" width={150} height={150} alt="Bhavya"/>
        <Link href='/'>to home</Link>
    </div>
  )
}

export default FirstPost