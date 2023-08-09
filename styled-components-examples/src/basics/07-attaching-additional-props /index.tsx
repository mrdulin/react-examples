import styled from 'styled-components';

const Input = styled.input.attrs<{ $size?: string }>((props) => ({
	type: 'text',
	$size: props.$size || '1em',
}))`
	color: #bf4f74;
	font-size: 1em;
	border: 2px solid #bf4f74;
	border-radius: 3px;

	/* here we use the dynamically computed prop */
	margin: ${(props) => props.$size};
	padding: ${(props) => props.$size};
`;

export const AttachingAdditionalProps = () => {
	return (
		<div>
			<Input placeholder='A small text input' />
			<br />
			<Input
				placeholder='A bigger text input'
				$size='2em'
			/>
		</div>
	);
};

const Input2 = styled.input.attrs<{ $size?: string }>((props) => ({
	type: 'text',
	$size: props.$size || '1em',
}))`
	border: 2px solid #bf4f74;
	margin: ${(props) => props.$size};
	padding: ${(props) => props.$size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input2).attrs({
	type: 'password',
})`
	// similarly, border will override Input's border
	border: 2px solid aqua;
`;

export const OverridingAttrs = () => {
	return (
		<div>
			<Input
				placeholder='A bigger text input'
				$size='2em'
			/>
			<br />
			{/* Notice we can still use the size attr from Input */}
			<PasswordInput
				placeholder='A bigger password input'
				$size='2em'
			/>
		</div>
	);
};
