import React, { Component } from 'react';
import axios from 'axios';
import CompanyProfile from './CampanyProfile';

export default class Parent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3000/link2').then((response) => {
      this.setState({ company: response.data });
    });
  }

  render() {
    return <CompanyProfile company={this.state.company} />;
  }
}
