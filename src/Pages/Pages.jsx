import FlashDeals from '../Components/FlashDeals/FlashDeals';
import Home from '../Components/MainPage/Home';
const Pages = ({ productItems, cartItem, addToCart }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
    </>
  );
};

export default Pages;
