import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../Context/Context';

function Cart() {

  const {order, handleBasketShow = Function.prototype} = useContext(ShopContext)

  const quantity = order.length;

  return (
    <div className='cart red darken-4 white-text' onClick={handleBasketShow}>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
}

export default Cart;
