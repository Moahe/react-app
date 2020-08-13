import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import './style.scss';
import { CurrentUserContextProvider } from './contexts/currentUserContext';
import LandingContainer from './Pages/LandingContainer/LandingContainer';
import { CountProvider } from './contexts/countContext';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
    <CurrentUserContextProvider>
    <CountProvider>
    <Switch>
    <Route path="*" component={LandingContainer} />
    </Switch>
    </CountProvider>
    </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
