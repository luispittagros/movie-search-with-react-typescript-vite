import type { ReactNode } from 'react';
import { ReactComponent as Logo } from '@/assets/svg/logo.svg';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <header>
      <Logo />
    </header>
    <main>
      {children}
    </main>
  </>
);

export default Layout;
