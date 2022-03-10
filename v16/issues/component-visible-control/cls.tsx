import React, { Component } from 'react';
import { api } from './api';

interface TempCompProps {
  visible?: boolean;
}
export default class TempComp extends Component<TempCompProps, { data: string }> {
  state = {
    data: '',
  };
  componentDidMount() {
    api.ajax().then(() => {
      this.setState({ data: 'fake data' });
    });
  }
  render() {
    const { visible = true } = this.props;
    if (!visible) return null;

    return <div>TempComp</div>;
  }
}
