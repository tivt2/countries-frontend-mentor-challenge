import Link from 'next/link';
import { ThemeButton } from './ThemeButton';

export function NavBar() {
  return (
    <nav className="fixed top-0 z-50 left-0 w-screen h-20 px-mobile-x md:px-desktop-x flex items-center justify-center text-base-600 bg-base-100 dark:text-base-100 dark:bg-base-400 shadow-nav-bar transition-colors">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <Link href={'/'} className="md:text-2xl font-extrabold">
          Where in the world?
        </Link>
        <ThemeButton />
      </div>
    </nav>
  );
}
