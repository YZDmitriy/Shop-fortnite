import React from 'react';
import GoodItem from '../GoodItem/GoodItem';

function GoodsList(props) {

  const { goods = [], addToBasket = Function.prototype } = props



  if (!goods.length) {
    return <h3>Nothing here</h3>
  }

  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodItem key={item.id} {...item} addToBasket={addToBasket}/>
      ))}
    </div>
  );
}

export default GoodsList;
