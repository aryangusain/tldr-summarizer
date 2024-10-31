import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({
    weight: '600',
    style: 'normal',
    subsets: ['latin'],
})

function Logo() {
  return (
    <Link href='/'>
      <div className={poppins.className + " " + "rounded-full lg:text-4xl md:text-3xl text-2xl"}>
        <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>TLDR </span> 
          Summarizer
      </div>
    </Link>
  )
}

export default Logo