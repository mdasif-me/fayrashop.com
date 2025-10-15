'use client'

export const RootWrapper = ({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: string
}) => {
  // uncomment if you  want to use react-scan, this can be annoying sometimes - so by default it's disabled
  //   useScan({ enabled: process.env.NODE_ENV === 'development' })
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
      </ThemeProvider>
    </>
  )
}