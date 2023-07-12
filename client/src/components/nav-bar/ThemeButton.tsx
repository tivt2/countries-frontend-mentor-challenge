'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const lightIcon = (
    <Moon className="scale-[65%] md:scale-75 stroke-base-600" />
  );
  const darkIcon = <Sun className=" scale-[65%] md:scale-75 stroke-base-100" />;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="flex items-center gap-[0.15rem] md:gap-1 text-xs font-semibold"
    >
      {resolvedTheme === 'dark' ? darkIcon : lightIcon}
      {resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
