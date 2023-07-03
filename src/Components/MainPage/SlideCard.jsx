import { slideData } from './Data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function SlideCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: '0px' }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {slideData.map((sData) => {
          return (
            <div className='box d_flex top' key={sData.id}>
              <div className='left'>
                <h1>{sData.title}</h1>
                <p>{sData.desc}</p>
                <button className='btn-primary'>Visit Collections</button>
              </div>
              <div className='right'>
                <img src={sData.cover} alt={sData.title} />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default SlideCard;
