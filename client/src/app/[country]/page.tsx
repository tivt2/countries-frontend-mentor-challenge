interface CountryProps {
  params: { country: string };
}

export default function Country({ params }: CountryProps) {
  const { country } = params;

  return (
    <main>
      <h1>{country} page</h1>
    </main>
  );
}
