import { useCountryPageContext } from '@/contexts/CountryPageContext';
import Image from 'next/image';

export function CountryPageFlag() {
  const {
    country: { flags, name },
  } = useCountryPageContext();

  return (
    <div className="relative w-full aspect-[7.5/4.5] shadow-flag">
      <Image
        src={flags.svg}
        alt={`Country flag of ${name.common}`}
        priority
        quality={100}
        style={{ objectFit: 'cover' }}
        fill
      />
    </div>
  );
}
