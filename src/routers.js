import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

class Routers extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path='/'>

            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (props) => {
  return {};
};
export default connect(mapStateToProps, {})(Routers);
