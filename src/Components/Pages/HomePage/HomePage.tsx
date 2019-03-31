import React from 'react';

import logo from '../../../logo.svg';
import './HomePage.css';

import TimelapseForm from "../../TimelapseForm/TimelapseForm";

interface IHomePageProps {
}

export class HomePage extends React.Component<IHomePageProps> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <TimelapseForm />
        </header>
      </div>
    );
  }
}

export default HomePage;
