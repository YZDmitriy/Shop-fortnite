import React from 'react';
import { useContext } from 'react';
import BasketItem from '../BasketItem/BasketItem';
import { ShopContext } from '../Context/Context';

function BasketList() {
  const { 
    order = [], 
    handleBasketShow = Function.prototype, 
   } = useContext(ShopContext);


  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)

  return (
    <ul className='collection basket-list'>
      <li className=' basket'>Корзина</li>
      {order.length ? (
        order.map((el) => <BasketItem 
        key={el.id} 
        {...el} />)
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item'>Общая стоимость: {totalPrice} рублей
      <button className='secondary-content btn oform'>Оформить</button>
      </li>
      <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
    </ul>
  );
}

export default BasketList;
