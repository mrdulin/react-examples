import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line jsx-a11y/anchor-is-valid
const Link = ({ className, children }: React.ComponentPropsWithoutRef<'a'>) => <a className={className}>{children}</a>;

const StyledLink = styled(Link)`
	color: #bf4f74;
	font-weight: bold;
`;

export const StylingAnyComponent = () => {
	return (
		<div>
			<Link>Unstyled, boring Link</Link>
			<br />
			<StyledLink>Styled, exciting Link</StyledLink>
		</div>
	);
};
