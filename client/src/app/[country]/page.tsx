'use client';

import { NavBar } from '@/components/nav-bar/NavBar';
import { ThemeProvider } from 'next-themes';

interface CountryProps {
  params: { country: string };
}

export default function Country({ params }: CountryProps) {
  const { country } = params;

  return (
    <ThemeProvider attribute="class">
      <NavBar />
      <main>
        <h1>{country} page</h1>
      </main>
    </ThemeProvider>
  );
}
