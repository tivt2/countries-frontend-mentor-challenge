interface CountryCardStatDescriptionProps {
  stat: string;
  value: string;
}

export function CountryCardStatDescription({
  stat,
  value,
}: CountryCardStatDescriptionProps) {
  return (
    <div>
      <span className="font-semibold">{stat}</span>
      <span>{value}</span>
    </div>
  );
}
