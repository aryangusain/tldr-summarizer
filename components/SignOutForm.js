import React from 'react'
import { signOut } from '@/auth'
import { Button } from './ui/button'

function SignOutForm() {
  return (
    <form action={ async() => {
        'use server'
        await signOut({redirectTo: '/'})
      }}>
        <Button type='submit'>Logout</Button>
    </form>
  )
}

export default SignOutForm;