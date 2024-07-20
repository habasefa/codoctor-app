'use client'

import { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface ProviderProps {
    children: React.ReactNode
}

const Providers: FC<ProviderProps> = ({children}) => {
    const queryClient = new QueryClient
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default Providers