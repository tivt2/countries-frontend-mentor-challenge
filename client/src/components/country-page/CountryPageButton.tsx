import Link from 'next/link';
import { ReactNode } from 'react';

interface CountryPageButtonProps {
  text: string;
  icon?: ReactNode;
}

export function CountryPageButton({ text, icon }: CountryPageButtonProps) {
  return (
    <Link
      href={text === 'Back' ? '/' : `/${text}`}
      className="w-min flex gap-1 items-center justify-center px-5 py-1 md:text-sm text-buttons bg-base-100 dark:bg-base-400 hover:bg-base-200 hover:dark:brightness-125 transition-all rounded-buttons shadow-buttons"
    >
      {icon}
      {text}
    </Link>
  );
}
