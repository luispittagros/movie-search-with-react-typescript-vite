import { ReactComponent as Logo } from '@/assets/svg/logo.svg';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <header>
      <Logo />
    </header>
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
