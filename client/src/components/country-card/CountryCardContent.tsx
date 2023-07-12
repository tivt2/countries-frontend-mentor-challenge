import { ReactNode } from 'react';

interface CoutryCardContentProps {
  children: ReactNode;
}

export function CountryCardContent({ children }: CoutryCardContentProps) {
  return (
    <div className=" min-h-[11rem] flex flex-col gap-1 p-6 pt-7">
      {children}
    </div>
  );
}
