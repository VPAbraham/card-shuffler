import { ReactElement, useState } from 'react';
import '../styles/NavBar.scss';

type NavBarProps = {
  button: ReactElement,
  dropdown1: Function,
  dropdown2: Function
}

const NavBar = ({ button, dropdown1, dropdown2 }: NavBarProps) => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  return (
    <nav className='navbar nav-bar px-3 py-2' role='navigation' aria-label='main naviagtion'>
      <div className='navbar-brand'>
        <a className=''>
          <h1 className=''>Card Shuffler</h1>
        </a>
        <a
          role="button"
          className="navbar-burger has-text-white"
          aria-label="menu"
          aria-expanded="false"
          data-target="navBarItems"
          onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id='navBarItems' className={`navbar-menu is-dark ${hamburgerIsOpen && 'is-active'}`}>
        <div className='navbar-end'>
          <span className='navbar-item'>
            {dropdown1()}
          </span>
          <span className='navbar-item'>
            {dropdown2()}
          </span>
          <span className='navbar-item'>
            {button}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;