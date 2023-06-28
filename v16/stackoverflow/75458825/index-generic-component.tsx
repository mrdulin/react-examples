import React from 'react';

interface FetchData {
	name: string;
	src: string;
	id: string;
	price: number;
}
interface FetchData2 {
	title: string;
	src: string;
	_id: string;
	item_price: number;
}

function Item<T extends { src: string }>({
	item,
	title,
	price,
}: {
	item: T;
	title: (item: T) => React.ReactNode;
	price: (item: T) => React.ReactNode;
}) {
	return (
		<li>
			<p>{title(item)}</p>
			<img src={item.src} />
			<p>{price(item)}</p>
		</li>
	);
}

function List({ type }: { type: 'foo' | 'bar' }) {
	const fetchData: FetchData[] = [];
	const fetchData2: FetchData2[] = [];
	return (
		<>
			{type === 'foo'
				? fetchData.map((item) => (
						<Item
							key={item.id}
							item={item}
							title={(i) => i.name}
							price={(i) => i.price}
						/>
				  ))
				: fetchData2.map((item) => (
						<Item
							key={item._id}
							item={item}
							title={(i) => i.title}
							price={(i) => i.item_price}
						/>
				  ))}
		</>
	);
}

export default function App() {
	return (
		<ul>
			<List type='foo' />
			<List type='bar' />
		</ul>
	);
}
