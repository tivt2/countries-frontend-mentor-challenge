import { useCountryCardContext } from '@/contexts/CountryCardContext';
import Image from 'next/image';

export function CountryCardFlag() {
  const {
    country: { flag, name },
  } = useCountryCardContext();

  return (
    <div className="relative w-full aspect-[7.5/4.5]">
      <Image
        src={flag}
        alt={`Country flag of ${name}`}
        quality={100}
        priority
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
