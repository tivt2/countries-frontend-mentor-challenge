'use client';

import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export function ThemeButton() {
  const [isDark, setIsDark] = useState(false);

  const lightIcon = <Moon className="scale-[65%] md:scale-75" />;
  const darkIcon = <Sun className=" scale-[65%] md:scale-75" />;

  return (
    <button
      onClick={() => setIsDark((old) => !old)}
      className="flex items-center gap-[0.15rem] md:gap-1 text-xs font-semibold"
    >
      {isDark ? darkIcon : lightIcon}
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
