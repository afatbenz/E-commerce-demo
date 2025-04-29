import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'

/**
 * Layout component providing consistent page structure
 * Includes header and main content area
 */
const Layout = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <div
      className={`layout-wrapper ${isHomePage ? 'home-background' : ''}`}
    >
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout
