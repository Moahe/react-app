import React, {useState, useEffect} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import useCurrentUser from '../../contexts/currentUserContext';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import {useCountState, useCountDispatch} from '../../contexts/countContext';
import oil from '../../assets/oil.jpeg';
import Button from '@material-ui/core/Button';
import soap from '../../assets/soap.jpeg';



interface LandingContainerProps extends RouteComponentProps {}

export const LandingContainer: React.FunctionComponent<LandingContainerProps> = ({ history, location }) => {
    const [updateUser, setUpdateUser] = useState('');
    const [currentUser, setCurrentUser] = useState('');
    const getCurrentUser = useCurrentUser();
    const {count} = useCountState();
    const dispatch = useCountDispatch();

    useEffect(() => {
      getCurrentUser.load();
    },[getCurrentUser]);

    // const renderConfetti = () => {
    //     const items = [];
    //     var i = 150;
    //     for(i; i>1; i-=1){
    //         items.push(<div className={"confetti-"+i} />);
    //     }
    //     return items;
    // }

    const updateUsername = () => {
      getCurrentUser.updateUser(updateUser);
      setCurrentUser(updateUser);
      return currentUser;
    }

    return (<div className="App">
    <header className="App-header">
      <div className="title">Webbshop</div>

    <div className="cart">
    <CartIcon className="App-logo" />
    {count}
    </div>
    </header>
    <div className="container">
      <div className="shopWindow">
        <div className="item">
        <img src={oil} className="itemPicture" alt="" />
        <p>Hair oil</p>
        <button onClick={() => dispatch({type: 'increment'})} className="cartButton">Add to cart</button>
        </div>

        <div className="item">
        <img src={soap} className="itemPicture" alt="" />
        <p>Soap</p>
        <button onClick={() => dispatch({type: 'increment'})} className="cartButton">Add to cart</button>
        </div>

        <div className="item">
        <img src={oil} className="itemPicture" alt="" />
        <p>Hair oil</p>
        <button onClick={() => dispatch({type: 'increment'})} className="cartButton">Add to cart</button>
        </div>

      </div>
      <input value={updateUser} onChange={(event) => setUpdateUser(event.target.value)}/>
      <button onClick={updateUsername} className="button">Finish</button>
      <button onClick={() => dispatch({type: 'decrement'})} className="button">Remove from cart</button>


      </div>
  </div>
  );
}

export default LandingContainer;
