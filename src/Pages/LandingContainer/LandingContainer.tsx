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
      console.log("Was called12");
      
      setCurrentUser(''+getCurrentUser.user?.name);
    },[setUpdateUser, getCurrentUser.user]);

    const renderConfetti = () => {
        const items = [];
        var i = 150;
        for(i; i>1; i-=1){
            items.push(<div className={"confetti-"+i} />);
        }
        return items;
    }

    return (<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {getCurrentUser.user?.name}
      <input value={updateUser} onChange={event => setUpdateUser(event.target.value)}/>
      <button onClick={()=>getCurrentUser.updateUser(updateUser)}>Finish</button>
    </header>
  </div>);
}

export default LandingContainer;
