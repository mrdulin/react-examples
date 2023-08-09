import { useRef } from 'react';
import styled from 'styled-components';

const Input = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	color: #bf4f74;
	background: papayawhip;
	border: none;
	border-radius: 3px;
`;

export const Refs = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	return (
		<Input
			ref={inputRef}
			placeholder='Hover to focus!'
			onMouseEnter={() => {
				if (inputRef.current) {
					inputRef.current.focus();
				}
			}}
		/>
	);
};
