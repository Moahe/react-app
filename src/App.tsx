import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import './style.scss';
import { CurrentUserContextProvider } from './contexts/currentUserContext';
import LandingContainer from './Pages/LandingContainer/LandingContainer';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
    <CurrentUserContextProvider>
    <Switch>
    <Route path="*" component={LandingContainer} />
    </Switch>
    </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
