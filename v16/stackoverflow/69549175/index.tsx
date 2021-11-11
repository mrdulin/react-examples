import React from 'react';
import { useCallback, useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/api/';
const api = {
  async getCartItems() {
    return ['apple', 'banana'];
  },
};

function useFetch(url: string) {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const getCartItems = useCallback(() => {
    return api.getCartItems().then((res) => {
      setCartItems(res);
    });
  }, [url]);

  useEffect(() => {
    getCartItems();
  }, [url]);

  return { data: cartItems, getCartItems };
}

const Menus = () => {
  const { data: cartItems, getCartItems } = useFetch(API_URL + 'cart');
  const handleClick = () => {
    getCartItems();
  };

  return (
    <div onClick={handleClick}>
      <ul>
        {cartItems.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
