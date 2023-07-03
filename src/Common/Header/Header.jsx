import Head from './Head';
import Search from './Search';
import NavBar from './NavBar';

import './Header.css';
function Header({ cartItem }) {
  return (
    <>
      <Head />
      <Search cartItem={cartItem} />
      <NavBar />
    </>
  );
}

export default Header;
