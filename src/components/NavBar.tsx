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
        <a className='navbar-item' >
          <h1 className='is-white'>Card Shuffler</h1>
        </a>
        <a
          role="button"
          className="navbar-burger"
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

      <div id='navBarItems' className={`navbar-menu ${hamburgerIsOpen && 'is-active'}`}>
        <div className='navbar-start'>
          <a className='navbar-item'>
            {dropdown1()}
          </a>
          <a className='navbar-item'>
            {dropdown2()}
          </a>
          <a className='navbar-item'>
            {button}
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;