import React, { useState } from 'react';

function useMenuItems() {
  const [menuItems, setMenuItems] = useState([
    { name: 'Americano', price: 1.5, order: '' },
    { name: 'Espresso', price: 3.5, order: '' },
    { name: 'Macchiato', price: 5.5, order: '' },
    { name: 'Cafe Mocha', price: 8.5, order: '' },
    { name: 'Latte', price: 6.5, order: '' },
    { name: 'Cappucino', price: 5.5, order: '' },
    { name: 'Frappe', price: 8.5, order: '' },
  ]);

  const setOrderForMenuItem = (nOrder, itemName) => {
    setMenuItems((pre) => {
      return pre.map((v) => (v.name === itemName ? { ...v, order: nOrder } : v));
    });
  };

  return { menuItems, setOrderForMenuItem } as const;
}

export default function MenuPage() {
  const { menuItems, setOrderForMenuItem } = useMenuItems();

  const handleChange = (event, item) => {
    setOrderForMenuItem(event.target.value, item.name);
  };

  return (
    <div>
      {menuItems.map((item, i) => {
        return (
          <select
            data-testid={`menu-order-${i}`}
            key={item.name}
            value={item.order}
            onChange={(e) => handleChange(e, item)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        );
      })}
    </div>
  );
}
