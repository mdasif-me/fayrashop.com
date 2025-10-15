import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './styles/globals.css'
import { rootMetadata } from '@/config/root-metadata.config'
import { RootWrapper } from './root-wrapper'
import { AppNavbar, Banner } from '@/components/layouts'

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <RootWrapper>
          <Banner />
          <AppNavbar />
          {children}
        </RootWrapper>
      </body>
    </html>
  )
}
export const metadata: Metadata = { ...rootMetadata }
