import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import logo from '../../flamingo.png';

interface LandingContainerProps extends RouteComponentProps {}

export const LandingContainer: React.FunctionComponent<LandingContainerProps> = ({ history, location }) => {

    return (<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  </div>);
}

export default LandingContainer;
