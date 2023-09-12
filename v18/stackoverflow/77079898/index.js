import PropTypes from 'prop-types';
import React, { Component } from 'react';
const HelloWorld = ({
  className
}) => {
  return <div className={className}>Hello world!</div>;
};
HelloWorld.propTypes = {
  className: PropTypes.string
};
export { HelloWorld };