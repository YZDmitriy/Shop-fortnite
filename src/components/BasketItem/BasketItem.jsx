import React, { useContext } from 'react';
import { ShopContext } from '../Context/Context';

function BasketItem(props) {

  const {
    id,
    name,
    price,
    quantity,
  } = props


  const {removeFromBasket, incrimentQuantity, decrimentQuantity} = useContext(ShopContext)

  return (
    <li className='collection-item'>
      {name} x <i className='material-icons basket-quantity'  onClick={() => decrimentQuantity(id)}>remove_circle</i>
      {quantity} <i className='material-icons basket-quantity' onClick={() => incrimentQuantity(id)}>add_circle</i> = {price * quantity}{' '}
      рублей
      <span className='secondary-content mus-vedro' onClick={() => removeFromBasket(id)}>
        <i className='material-icons basket-delete'>delete</i>
      </span>
    </li>
  );
}

export default BasketItem;
