import Link from 'next/link';
import { ThemeButton } from './ThemeButton';

export function NavBar() {
  return (
    <nav className="fixed top-0 z-50 left-0 w-screen h-20 px-mobile-x md:px-desktop-x flex items-center justify-between text-base-600 bg-base-100 dark:text-base-100 dark:bg-base-400 shadow-nav-bar transition-colors">
      <Link href={'/'} className="md:text-2xl font-extrabold">
        Where in the world?
      </Link>
      <ThemeButton />
    </nav>
  );
}
