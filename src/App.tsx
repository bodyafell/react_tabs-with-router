import { NavLink, Outlet } from 'react-router-dom';

const getNavClass = ({ isActive }: { isActive: boolean }) =>
  `navbar-item ${isActive ? 'is-active' : ''}`;

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" end className={getNavClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getNavClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <Outlet />
    </div>
  </>
);
