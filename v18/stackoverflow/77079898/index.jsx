import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class HelloWorld extends Component {
	static propTypes = {
		className: PropTypes.string,
	};

	render() {
		const { className } = this.props;

		return <div className={className}>Hello world!</div>;
	}
}
