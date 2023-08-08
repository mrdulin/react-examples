import React from 'react';
import * as Sentry from '@sentry/react';

import logo from './logo.svg';
import './App.css';

const MethodDoesNotExistExample = () => {
  //@ts-ignore
  return <button onClick={() =>  methodDoesNotExist()} >click me</button>;
};

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img
					src={logo}
					className='App-logo'
					alt='logo'
				/>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				<Sentry.ErrorBoundary
					fallback={<p>An error has occurred</p>}
					showDialog
				>
					<MethodDoesNotExistExample />
				</Sentry.ErrorBoundary>
			</header>
		</div>
	);
}

export default App;
