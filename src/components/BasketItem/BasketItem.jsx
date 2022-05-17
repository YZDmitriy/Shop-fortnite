import React from 'react';

function BasketItem(props) {

  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incrimentQuantity,
    decrimentQuantity,
  } = props

  return (
    <li className='collection-item'>
      {name} x <i class='material-icons basket-quantity'  onClick={() => decrimentQuantity(id)}>remove_circle</i>
      {quantity} <i class='material-icons basket-quantity' onClick={() => incrimentQuantity(id)}>add_circle</i> = {price * quantity}{' '}
      рублей
      <span className='secondary-content mus-vedro' onClick={() => removeFromBasket(id)}>
        <i class='material-icons basket-delete'>delete</i>
      </span>
    </li>
  );
}

export default BasketItem;
