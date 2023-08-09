import styled from 'styled-components';

const Button = styled.button`
	color: #bf4f74;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid #bf4f74;
	border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
	color: tomato;
	border-color: tomato;
`;

export const AsPolymorphicProp = () => {
	return (
		<div>
			<Button>Normal Button</Button>
      <Button as='a' href='#'>Link with Button styles</Button>
			<TomatoButton as='a' href='#'>Link with Tomato Button styles</TomatoButton>
		</div>
	);
};
