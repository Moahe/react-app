import React, { useCallback } from 'react';
import { useState, useContext } from 'react';

export interface User {
    name: string;
}

export const MOCK_USER: User = {
    name: 'Test'
  };

export interface CurrentUserContextValues {
    user: User | null;
  }

interface CurrentUserContextData extends CurrentUserContextValues {
    setUser: (user: User | null) => void;
  }

const defaultValues: CurrentUserContextData = {
    user: null,
    setUser: () => {},
  };
  
  const CurrentUserContext = React.createContext<CurrentUserContextData>(defaultValues);


  export const CurrentUserContextProvider: React.FunctionComponent = ({
    children,
  }) => {
    const [user, setUser] = useState(defaultValues.user);
    return (
      <CurrentUserContext.Provider value={{ user, setUser }}>{children}</CurrentUserContext.Provider>
    );
  };

  interface CurrentUserHook extends CurrentUserContextValues {
    load: () => Promise<void>;
    updateUser: (name: string) => Promise<User | undefined>;
  }

  const useCurrentUser = (): CurrentUserHook => {
    const { user, setUser } = useContext(CurrentUserContext);
  
    const load = useCallback(async () => {
        const currentUser = MOCK_USER;
        setUser(currentUser);
    }, [setUser]);

    const updateUser = useCallback(async (name: string) => {
          const currentUser = MOCK_USER;
          currentUser.name = name;
          setUser(currentUser);
          return currentUser;
      }, [setUser]);

  
    return { load, user, updateUser };
  };
  
  export default useCurrentUser;
  