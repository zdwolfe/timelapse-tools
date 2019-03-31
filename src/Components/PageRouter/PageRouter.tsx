import React from 'react';

import { Route, Switch, withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";

import { PageRoutes } from "./PageRoutes";

class PageRouter extends React.Component<RouteComponentProps<{}>> {
  public render() {
    return (
      <Switch>
        <Route path={PageRoutes.Home.path} component={PageRoutes.Home.component} />
      </Switch>
    );
  }
}

export default withRouter(PageRouter);
