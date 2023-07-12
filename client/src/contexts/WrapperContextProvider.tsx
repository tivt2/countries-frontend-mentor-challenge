'use client';

import { queryClient } from '@/api/queryClient';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';

interface WrapperContextProviderProps {
  children: ReactNode;
}

export function WrapperContextProvider({
  children,
}: WrapperContextProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
