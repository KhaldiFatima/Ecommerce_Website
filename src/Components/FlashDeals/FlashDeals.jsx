import FlashCard from './FlashCard';
import './style.css';

const FlashDeals = ({ productItems, addToCart, cartItem }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Flash Deals</h1>
          </div>
          <FlashCard
            productItems={productItems}
            addToCart={addToCart}
            cartItem={cartItem}
          />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
