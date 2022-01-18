import React from 'react';

const tabs = ['Books', 'Movies', 'Laptops'];
type Tabs = typeof tabs;
type Tab = Tabs[number];

interface Book {
  title: string;
}
interface Movie {
  name: string;
}
interface Laptop {
  price: string;
}

const GenericSelect = <T extends unknown>({ data }: { data: T }) => {
  return <div>{data}</div>;
};

const getSelect = (tab: Tab) => {
  switch (tab) {
    case 'Books':
      return <GenericSelect<Book> data={{ title: 'a' }} />;
    case 'Movies':
      return <GenericSelect<Movie> data={{ name: 'b' }} />;
    case 'Laptops':
      return <GenericSelect<Laptop> data={{ price: 'c' }} />;
  }
};
