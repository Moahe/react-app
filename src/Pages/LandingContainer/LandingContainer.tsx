import React, {useState, useEffect} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import logo from '../../flamingo.png';
import useCurrentUser from '../../contexts/currentUserContext';

interface LandingContainerProps extends RouteComponentProps {}

export const LandingContainer: React.FunctionComponent<LandingContainerProps> = ({ history, location }) => {
    const [updateUser, setUpdateUser] = useState('');
    const [currentUser, setCurrentUser] = useState('');
    const getCurrentUser = useCurrentUser();

    useEffect(() => {
      getCurrentUser.load();
    },[]);

    const renderConfetti = () => {
        const items = [];
        var i = 150;
        for(i; i>1; i-=1){
            items.push(<div className={"confetti-"+i} />);
        }
        return items;
    }

    const updateUsername = () => {
      getCurrentUser.updateUser(updateUser);
      setCurrentUser(updateUser);
    }

    return (<div className="App">
    <header className="App-header">
      Webbshop
    <img src={logo} className="App-logo" alt="logo" />
    {getCurrentUser.user?.name}
    </header>
    <div className="container">
      <input value={updateUser} onChange={(event) => setUpdateUser(event.target.value)}/>
      <button onClick={updateUsername} className="button">Finish</button>
      </div>
  </div>
  );
}

export default LandingContainer;
