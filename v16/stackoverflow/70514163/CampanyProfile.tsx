import React, { Component } from 'react';

class CompanyProfile extends Component {
  render() {
    const { campany } = this.props;
    const CompanyView = campany.map((cp, i) => {
      return (
        <div>
          <p>{cp.name}</p>
          <p>{cp.type}</p>
          <p>...other data</p>
          <p>{cp.CompanyProducts.data}</p>
        </div>
      );
    });

    return <div>{CompanyView}</div>;
  }
}

export default CompanyProfile;
