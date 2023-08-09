import styled from 'styled-components';

const userInput = '/api/withdraw-funds';

const ArbitraryComponent = styled.div`
	background: url(${CSS.escape(userInput)});
`;

export const Security = () => {
	return <ArbitraryComponent>escape background</ArbitraryComponent>;
};
