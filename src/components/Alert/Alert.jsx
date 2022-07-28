/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { ShopContext } from '../Context/Context';

function Alert(props) {

  const {alertName: name = '', closeAlert = Function.prototype } = useContext(ShopContext)

useEffect(() => {
const  timerId = setTimeout(closeAlert, 3000);

return () => {
  clearTimeout(timerId)
}
}, [name])


  return (
    <div id='toast-container'>
      <div className='toast'>
        {name} добавлен в корзину
      </div>
    </div>
  );
}

export default Alert;
