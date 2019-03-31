import React, { Component } from 'react';
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import { configureStore } from "../../state/store/configureStore";

import AppLayout from "../AppLayout/AppLayout";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <HashRouter>
          <AppLayout />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
