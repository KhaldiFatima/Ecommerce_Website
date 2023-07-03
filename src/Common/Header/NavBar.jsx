import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='categories d_flex'>
            <span className='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa-solid fa-chevron-down'></i>
            </h4>
          </div>
          <div className='navlink'>
            <ul
              className={menu ? 'nav-links-menu' : 'link f_flex capitalize'}
              onClick={() => setMenu(false)}
            >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/pages'>Pages</Link>
              </li>
              <li>
                <Link to='/user'>User account</Link>
              </li>
              <li>
                <Link to='/vendor'>Vendor account</Link>
              </li>
              <li>
                <Link to='/track'>Track my order</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMenu(!menu)}>
              {menu ? (
                <i className='fa-regular  fa-rectangle-xmark close home-btn'></i>
              ) : (
                <i className='fa-solid fa-bars-staggered  open '></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
