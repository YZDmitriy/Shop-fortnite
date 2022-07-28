import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../Context/Context';
import GoodItem from '../GoodItem/GoodItem';

function GoodsList() {

  const { goods = [] } = useContext(ShopContext)



  if (!goods.length) {
    return <h3>Nothing here</h3>
  }

  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodItem key={item.id} {...item}/>
      ))}
    </div>
  );
}

export default GoodsList;
