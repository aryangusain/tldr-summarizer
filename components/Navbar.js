import React from 'react'
import Logo from './Logo'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import SignOutForm from './SignOutForm'
import { auth } from '@/auth'

async function Navbar() {
  const session = await auth();

  return (
    <nav className='flex justify-between items-center w-full px-4 py-2 md:px-8 md:py-3 lg:px-8 lg:py-4'>
        <Logo></Logo>
        <DropdownMenu>
          <DropdownMenuTrigger>   
              {
                (session.user)
                ? (
                  <Image src={session.user.image} width={28} height={28}  alt="User Image" className='rounded-full lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6'></Image>
                ) : (
                  <Image src="/profile.png" width={28} height={28}  alt="User Image" className='lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6'></Image>
                )
              }         
          </DropdownMenuTrigger>
          <DropdownMenuContent>
              <DropdownMenuItem>
                <SignOutForm></SignOutForm>
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

    </nav>
  )
}

export default Navbar