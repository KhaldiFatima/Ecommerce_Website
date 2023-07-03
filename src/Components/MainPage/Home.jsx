import Categories from './Categories';
import Slide from './Slide';

import './Home.css';

function Home() {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <Slide />
        </div>
      </section>
    </>
  );
}

export default Home;
