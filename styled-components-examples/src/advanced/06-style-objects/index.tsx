import styled from 'styled-components';

// Static object
const Box = styled.div({
	background: '#BF4F74',
	height: '50px',
	width: '50px',
});

// Adapting based on props
const PropsBox = styled.div<{ $background?: string }>((props) => ({
	background: props.$background,
	height: '50px',
	width: '50px',
}));

export const StyleObjects = () => {
	return (
		<div>
			<Box />
			<PropsBox $background='blue' />
		</div>
	);
};
