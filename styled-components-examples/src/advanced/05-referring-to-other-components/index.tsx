import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
	display: flex;
	align-items: center;
	padding: 5px 10px;
	background: papayawhip;
	color: #bf4f74;
`;

const Icon = styled.svg`
	flex: none;
	transition: fill 0.25s;
	width: 48px;
	height: 48px;

	${Link}:hover & {
		fill: rebeccapurple;
	}
`;

const Label = styled.span`
	display: flex;
	align-items: center;
	line-height: 1.2;

	&::before {
		content: '◀';
		margin: 0 10px;
	}
`;

export const ReferringToOtherComponents = () => {
	return (
		<Link href='#'>
			<Icon viewBox='0 0 20 20'>
				<path d='M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z' />
			</Icon>
			<Label>Hovering my parent changes my style!</Label>
		</Link>
	);
};

const A = ({ children, ...rest }: React.ComponentPropsWithoutRef<'div'>) => {
	console.log('className: ', rest.className);
	return <div {...rest}>This is A {children}</div>;
};

const StyledA = styled(A)``;

const B = styled.div`
	${StyledA} {
		font-size: 18px;
		color: red;
	}
`;

export const Caveat = () => {
	return (
		<div>
			<B>
				{/* <A>Text</A> */}
				Text
			</B>
		</div>
	);
};
