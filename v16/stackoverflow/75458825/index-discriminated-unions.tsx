import React from 'react';

interface FetchData {
	kind: 'a';
	name: string;
	src: string;
	id: string;
	price: number;
}
interface FetchData2 {
	kind: 'b';
	title: string;
	src: string;
	_id: string;
	item_price: number;
}

function Item({ item }: { item: FetchData | FetchData2 }) {
	return (
		<li>
			<p>{item.kind === 'a' ? item.name : item.title}</p>
			<img src={item.src} />
			<p>{item.kind === 'a' ? item.price : item.item_price}</p>
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
						/>
				  ))
				: fetchData2.map((item) => (
						<Item
							key={item._id}
							item={item}
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
