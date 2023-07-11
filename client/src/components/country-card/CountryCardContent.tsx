import { ReactNode } from 'react';

interface CoutryCardContentProps {
  children: ReactNode;
}

export function CountryCardContent({ children }: CoutryCardContentProps) {
  return <div className="flex flex-col gap-1 p-8 pb-14">{children}</div>;
}
