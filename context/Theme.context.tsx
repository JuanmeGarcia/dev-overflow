
import { ThemeProviderProps } from 'next-themes/dist/types'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
} & ThemeProviderProps

const ThemeProvider = ({
  children,
  ...props
}: Props) => {
  return (
    <NextThemeProvider
      {...props}
    >
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider