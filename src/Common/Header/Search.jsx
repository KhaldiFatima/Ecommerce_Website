import { useState } from 'react';
import { Link } from 'react-router-dom';

function Search({ cartItem }) {
  window.addEventListener('scroll', () => {
    const search = document.querySelector('.search');
    search.classList.toggle('active', window.scrollY > 100);
  });

  const [query, setQuery] = useState('');

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width'>
            <h1>Go Shopping</h1>
          </div>
          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input
              type='text'
              placeholder='Search and hit enter ...'
              value={query}
              onChange={onChange}
            />
            <span>All Category </span>
            <div className='icon f_flex width'>
              <i className='fa fa-user icon-circle '></i>
              <div className='cart'>
                <Link to='/cart'>
                  <i className='fa fa-shopping-bag icon-circle '></i>
                  <span>{cartItem.length === 0 ? '' : cartItem.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
