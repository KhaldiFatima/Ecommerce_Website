import { categoriesData } from './Data';

function Categories() {
  return (
    <>
      <div className='category'>
        {categoriesData.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt={value.cateName} />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
