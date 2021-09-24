import React from 'react';
import {Route, RouteComponentProps} from 'react-router-dom';

interface RestaurantProps extends RouteComponentProps<{id: string}> {
  user: any;
}
const Restaurant = (props: RestaurantProps) => {
  const a = props.match.params.id;
  const b = props.user;
  return <div>Restaurant</div>
}

const App = () => {
  const user = {};
  return (
    <Route
      path="/restaurants/:id"
      render={(props) => <Restaurant {...props} user={user} />}
    />
  );
};
