import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './style.scss';
import LandingContainer from './Pages/LandingContainer/LandingContainer';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="*" component={LandingContainer} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
