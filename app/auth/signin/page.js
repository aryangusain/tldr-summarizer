import { signIn } from '@/auth'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function SignIn() {
  return (
    <div className='flex flex-col gap-8 items-center'>
        <Logo></Logo>
        <div className='flex flex-col gap-6'>
            <div className='w-full flex flex-col gap-3 items-center'>
                <form action={ async() => {
                    'use server';
                    await signIn("google", {redirectTo: "/home"});
                }}>
                    <Button type='submit'>
                        <Image src="/google-logo.svg" height={20} width={20} alt="google logo"></Image>
                        <span>Login with Google</span>
                    </Button>
                </form>

                <div className='flex flex-row justify-center items-center px-4 gap-2'>
                    <span className='border-gray-500 border w-12 h-0'></span>
                    <span className='text-gray-500 text-xs'>or</span>
                    <span className='border-gray-500 border w-12 h-0'></span>
                </div>

                <form action={ async() => {
                    'use server';
                    await signIn("github", {redirectTo: "/home"});
                }}>
                    <Button type='submit'>
                        <Image src="/github-logo.svg" height={20} width={20} alt="google logo"></Image>
                        <span>Login with Github</span>
                    </Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn