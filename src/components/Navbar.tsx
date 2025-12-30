import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const NavLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', { 'has-background-grey-lighter': isActive });
};

export const Navbar = () => {
  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink className={NavLinkClass} to="/">
            Home
          </NavLink>

          <NavLink className={NavLinkClass} to="/people">
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
