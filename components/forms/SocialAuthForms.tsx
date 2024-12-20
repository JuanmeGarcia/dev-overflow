'use client';
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Providers } from '@/types/providers.types'
import { toast } from '@/hooks/use-toast'
import { signIn } from 'next-auth/react';
import { ROUTES } from '@/constants/routes';

export default function SocialAuthForms() {
  const buttonClass = 'background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 py-3.5 px-4'

  const handleSignIn = async (provider: Providers) => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: false,
      })
    } catch (error) {
      console.error(error);
      toast({
        title: "Sign in failed",
        description: error instanceof Error ? error.message : "An error occurred while signing in",
        variant: "destructive",
      })
    }
  }

  return (
    <div className='mt-10 flex flex-wrap gap-2.5'>
      <Button
        onClick={() => handleSignIn('github')}
        className={buttonClass}
      >
        <Image
          src={'/icons/github.svg'}
          alt='Github Logo'
          width={20}
          height={20}
          className='invert-colors mr-2.5 object-contain'
        />
        <span>Log in with GitHub</span>
      </Button>
      <Button
        className={buttonClass}
        onClick={() => handleSignIn('google')}
      >
        <Image
          src={'/icons/google.svg'}
          alt='Github Logo'
          width={20}
          height={20}
          className=' mr-2.5 object-contain'
        />

        <span>Log in with Google</span>
      </Button>
    </div>
  )
}
