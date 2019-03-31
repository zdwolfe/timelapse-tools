import React from 'react';
import { RouteComponentProps, withRouter } from "react-router";
import { connect } from 'react-redux';
import { Layout } from "antd";

const { Content } = Layout;

import PageRouter from "../PageRouter/PageRouter";

export class AppLayout extends React.Component<RouteComponentProps<{}>> {
  public render() {
    return (
      <div>
        <Layout style={{minHeight: "100vh"}}>
          <Layout>
            <Content style={{margin: "16px 16px"}}>
              <PageRouter /> {/** Main Application Window **/}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(connect<null, null>(null, null)(AppLayout));
