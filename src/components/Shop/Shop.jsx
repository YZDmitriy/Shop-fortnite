import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';
import Alert from '../Alert/Alert';
import BasketList from '../BasketList/BasketList';
import Cart from '../Cart/Cart';
import { ShopContext } from '../Context/Context';
import GoodsList from '../GoodsList/GoodsList';
import Preolader from '../Preloader/Preolader';

function Shop() {
  const { goods, loading, order, isBasketShow, alertName, setGoods } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} />
      {loading ? <Preolader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export default Shop;
