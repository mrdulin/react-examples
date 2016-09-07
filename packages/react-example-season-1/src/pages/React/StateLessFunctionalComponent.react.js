import React, {Component, PropTypes} from 'react';

const Text = ({children}) => {
	return (
		<p>{children}</p>
	);
};

Text.defaultProps = {
	children: 'I\'m a stateless functional component'
}
Text.propTypes = {
	children: PropTypes.string.isRequired
};

const Book = (props, context) => {
	console.log('Book Context', context);
	console.log('Book props', props);
	return (
		<p style={context}>{props.children}</p>
	);
}

Book.contextTypes = {
	color: PropTypes.string
}

class StateLessFunctionalComponent extends Component {
	static childContextTypes = {
		color: PropTypes.string
	}

	getChildContext() {
		return {color: 'purple'};
	}

	render() {
		return (
			<div>
				<Text></Text>
				<Book>Book name is 《React by Examples》</Book>
			</div>
		);
	}
}

export default StateLessFunctionalComponent;
