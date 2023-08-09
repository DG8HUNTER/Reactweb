"use client"
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
interface ProviderProps {
    children:React.ReactNode


}
export default function Provider({children}:ProviderProps) {
  
    return <NextThemesProvider enableSystem={true} defaultTheme='system' attribute='class'>{children}</NextThemesProvider>
  
}
