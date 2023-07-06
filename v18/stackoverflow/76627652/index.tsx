import React, { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';

type ButtonType = {
	inactive?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	text: string | ReactNode;
	type?: 'button' | 'submit' | 'reset';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ inactive, text, type = 'button', ...rest }: ButtonType) => (
	<button
		disabled={inactive}
		type={type}
		{...rest}
	>
		{text}
	</button>
);

const FormDialog = ({ children }: PropsWithChildren) => (
	<dialog>
		<form id='createCustomerForm'>
			<header>
				<h4>Create customer</h4>
				<button
					autoFocus
					onClick={() => {}}
					type='button'
				>
					X
				</button>
			</header>
			<div>{children}</div>
			<footer>
				<div>
					<Button
						onClick={() => {}}
						text='close'
						type='button'
					/>
				</div>
				<div>
					<Button
						form='createCustomerForm'
						text='submit'
						type='submit'
					/>
				</div>
			</footer>
		</form>
	</dialog>
);

export default function App() {
	return (
		<FormDialog>
			<input
				type='text'
				id='customerName'
			/>
		</FormDialog>
	);
}
