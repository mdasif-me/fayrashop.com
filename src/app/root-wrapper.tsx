'use client'

import { ThemeProvider } from '../components/theme-provider'

export const RootWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </>
  )
}
