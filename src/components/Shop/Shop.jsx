import React from 'react';
import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../config'
import Alert from '../Alert/Alert';
import BasketList from '../BasketList/BasketList';
import Cart from '../Cart/Cart';
import GoodsList from '../GoodsList/GoodsList';
import Preolader from '../Preloader/Preolader';

function Shop() {

  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isBasketShow, setBasketShow] = useState(false)
  const [alertName, setAlertName] = useState('')


  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.id === item.id
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(el => el.id !== itemId)
    setOrder(newOrder)
  }

  const incrimentQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity: newQuantity
        }
      } else {
        return el;
      }
    })
    setOrder(newOrder)
  }

  const decrimentQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0
        }
      } else {
        return el;
      }
    })
    setOrder(newOrder)
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow)
  }

  const closeAlert = () => {
    setAlertName('')
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
        // console.log(data);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {
        loading ? <Preolader /> : <GoodsList goods={goods} addToBasket={addToBasket} />
      }
      {
        isBasketShow &&
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incrimentQuantity={incrimentQuantity}
          decrimentQuantity={decrimentQuantity}
        />
      }
      {
        alertName &&
        <Alert
          name={alertName}
          closeAlert={closeAlert} />
      }
    </main>
  );
}

export default Shop;
