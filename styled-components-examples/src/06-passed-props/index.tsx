import styled from 'styled-components';

const Input = styled.input<{ $inputColor?: string }>`
	padding: 0.5em;
	margin: 0.5em;
	color: ${(props) => props.$inputColor || '#BF4F74'};
	background: papayawhip;
	border: none;
	border-radius: 3px;
`;

export const PassedProps = () => {
	return (
		<div>
			<Input defaultValue='abc' type='text' />
			<Input defaultValue='xyz' type='text' $inputColor='rebeccapurple'  />
		</div>
	);
};
