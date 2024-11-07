"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from "next-themes"
import { useState } from "react"
import { Toaster } from "../ui/sonner"

function AppProviders({children}: {children: React.ReactNode}) {
  const [queryclient] = useState(()=> new QueryClient)
  return (
    <QueryClientProvider client={queryclient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster richColors position='bottom-right'/>
          {children}
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default AppProviders