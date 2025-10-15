'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes'

/**
 * A wrapper for next-themes's ThemeProvider.
 * It provides the same functionality and props as the original,
 * but is renamed to avoid conflicts with other theme providers.
 * @see https://nextjs.org/docs/api-reference/components/theming#themeprovider
 * @param {ThemeProviderProps} props - The props to pass to the wrapped ThemeProvider.
 * @returns {React.ReactNode} The wrapped ThemeProvider component.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps): React.ReactNode {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
