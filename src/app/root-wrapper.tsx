'use client'

import { ThemeProvider } from '../components/theme-provider'

export const RootWrapper = ({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: string
}) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </>
  )
}
