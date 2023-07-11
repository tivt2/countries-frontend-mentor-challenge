import Link from 'next/link';
import { ThemeButton } from './ThemeButton';

export function NavBar() {
  return (
    <nav className="w-screen h-20 px-mobile-x md:px-desktop-x flex items-center justify-between bg-base-100 shadow-nav-bar">
      <Link href={'/'} className="md:text-2xl font-extrabold">
        Where in the world?
      </Link>
      <ThemeButton />
    </nav>
  );
}
