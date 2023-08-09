import styled from 'styled-components';

const Title = styled.h1<{ $upsideDown?: boolean }>`
	/* Text centering won't break if props.$upsideDown is falsy */
	${(props) => props.$upsideDown && 'transform: rotate(180deg);'}
	text-align: center;
`;

export const Conditionally = () => {
	return (
		<div>
			<Title >normal</Title>
      <Title $upsideDown>rotate 180 deg</Title>
		</div>
	);
};
