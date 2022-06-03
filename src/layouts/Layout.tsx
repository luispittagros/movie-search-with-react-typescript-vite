import { ReactComponent as Logo } from '@/assets/svg/logos/logo.svg';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="layout">
    <header>
      <Logo />
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
