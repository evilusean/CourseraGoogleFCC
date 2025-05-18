import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function header() {
  return (
    <header>
        <Link href="/">
        <Image src="/goatius.png" alt="Goatius" className="rounded-full" priority width={60} height={60} />
        </Link>
    </header>
  )
}


export default header